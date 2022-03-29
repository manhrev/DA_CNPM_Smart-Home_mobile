import axios from 'axios'

export default async function checkLogin(context) {
    try {
        const res = await axios.get('http://192.168.2.6:80/api/checkLogin')
        if (res.data.loggedIn) {
            context.loginDispatch('login')
            return true
        } else {
            context.loginDispatch('logout')
            alert("Please login!")
            return false
        }

    } catch {
        console.log("not changed")
        return false
    }
}
