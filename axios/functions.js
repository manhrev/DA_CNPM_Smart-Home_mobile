import axios from './axios'



export async function checkLogin(context, cb) {
    try {
        const res = await axios.get('/api/checkLogin')
        if (res.data.loggedIn) {
            context.loginDispatch('login')
            cb()
        } else {
            context.loginDispatch('logout')
            alert("Not logged in!")
        }

    } catch(error) {
        console.log(error)
        alert("Can't connect to server!")
    }
}

export async function checkConnection(cb) {
    try {
        const res = await axios.get('/api/checkConnection')
        if (res) {
            cb()
        } 

    } catch {
        console.log(error)
        alert("Can't connect to server!")
    }
}
