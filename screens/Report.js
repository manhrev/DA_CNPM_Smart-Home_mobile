import { Dimensions, ImageBackground, StyleSheet, Text, View, ScrollView } from "react-native";
import { Appbar } from "react-native-paper";
import { LineChart } from "react-native-chart-kit";
import React from 'react'
import axios from '../axios/axios'
import {checkLogin} from '../axios/functions'
import { AuthContext } from '../AuthContext'


const dayInWeek = ["CN","T2", "T3", "T4", "T5", "T6", "T7"]
const thisDay = new Date(Date.now())

function getLabels() {
    let day = thisDay.getDay()
    let labels = []
    for (let i = 0; i < 7; i++) {
        labels.unshift(dayInWeek[day])
        if (i==0) labels[0] = labels[0] + '(today)'
        day--;
        if (day < 0) day = 6;
    }
    return labels
}

//bug 
function processHumidityData(data) {
    let preDay = new Date(data[0].createdAt)

    let diff = thisDay.getDate() - preDay.getDate()
    let labels = getLabels()
    let dat = []
    data.forEach(val => {
        dat.unshift(val.humidity)
    });
    let j = 6
    for (let i=0; i<diff; i++) {
        dat[j] = 0;
        if (j!=6)
        labels[j] = 'nodata';
        j --;
    }
    return {
        labels: labels,
        datasets: [
            {data: dat}
        ]

    }
}
function processTemperatureDate(data) {
    let preDay = new Date(data[0].createdAt)
    let diff = thisDay.getDate() - preDay.getDate()
    let dat = []
    data.forEach(val => {
        dat.unshift(val.temperature)
    });
    let labels = getLabels()
    let j = 6
    for (let i=0; i<diff; i++) {
        dat[j] = 0;
        if (j!=6)
        labels[j] = 'nodata';
        j --;
    }
    return {
        labels: labels,
        datasets: [
            {data: dat}
        ]

    }
}
export default function Home({ navigation }) {
    const [data, setData] = React.useState(false)
    const fetchApi = () => {
        checkLogin(Context, async () => {
            try {
                const res = await axios.get('/api/getWeekReport')
                setData(res.data)
            } catch {
                alert("Error");
            }     
        })
    }

    const Context = React.useContext(AuthContext)
    React.useEffect(() => {
        const willFocusSubscription = navigation.addListener('focus', () => {
            fetchApi()
        });
        return willFocusSubscription;
    }, [navigation])
    return (
        <View style={styles.container}>
            <Appbar.Header style={{ height: 60 }}>
                <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
                <Appbar.Content title="Report" />
            </Appbar.Header>
            {data &&
            <ScrollView style={{ flex: 1 }}>
                <View style={{ width: '96%', alignSelf: "center" }}>
                    <Text style={{ fontSize: 22, marginLeft: 3, marginTop: 10, fontWeight: 'bold', color: "#6200ee" }}>Average temperature</Text>

                    <LineChart
                        data={processTemperatureDate(data)}
                        width={Dimensions.get("window").width * 96 / 100} // from react-native
                        height={220}
                        yAxisLabel=""
                        yAxisSuffix="°C"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#ffffff",
                            backgroundGradientFrom: "#9b42f5",
                            backgroundGradientTo: "#2200ff",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />

                    <Text style={{ fontSize: 22, marginLeft: 3, marginTop: 10, fontWeight: 'bold', color: "#6200ee" }}>Average humidity</Text>

                    <LineChart
                        data={processHumidityData(data)}
                        width={Dimensions.get("window").width * 96 / 100} // from react-native
                        height={220}
                        yAxisLabel=""
                        yAxisSuffix="%"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#ffffff",
                            backgroundGradientFrom: "#9b42f5",
                            backgroundGradientTo: "#2200ff",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />

                </View>




            </ScrollView>
            }

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});
