const getTemperate = async() => {
    try {
        const response = await fetch(
            "https://io.adafruit.com/api/v2/DAFS/feeds/temp/data"
        );
        const json = await response.json();
        setData(json[0].value);
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
};