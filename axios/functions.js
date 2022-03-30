import axios from 'axios'
import {SERVER_URL} from '@env'
axios.defaults.timeout = 1000;


export async function checkLogin(context, cb) {
    try {
        const res = await axios.get(SERVER_URL + '/api/checkLogin')
        if (res.data.loggedIn) {
            context.loginDispatch('login')
            cb()
        } else {
            context.loginDispatch('logout')
            alert("Not logged in!")
        }

    } catch {
        alert("Can't connect to server!")
    }
}

export async function checkConnection(cb) {
    try {
        const res = await axios.get(SERVER_URL + '/checkConnection')
        if (res.data) {
            cb()
        } else {
            alert("can's connect to server")
        }

    } catch {
        alert("Can't connect to server!")
    }
}
