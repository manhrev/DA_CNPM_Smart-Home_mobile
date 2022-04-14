import axios from "./axios";
import Storage from "../helpers/storage/storage";
export async function checkLogin(context, cb) {
    try {
        const role = await Storage.getItem('role')
        const res = await axios.get("/api/checkLogin");
        if (res.data.loggedIn) {
            if (role.value == "normal") {
                context.loginDispatch("login");
            } else {
                context.loginDispatch("adminLogin");
            }
            
            cb();
        } else {
            context.loginDispatch("logout");
            alert("Not logged in!");
        }
    } catch (error) {
        console.log(error);
        alert("Can't connect to server!");
    }
}

export async function checkConnection(cb) {
    try {
        const res = await axios.get("/api/checkConnection");
        if (res) {
            cb();
        }
    } catch (error) {
        console.log(error);
        alert("Can't connect to server!");
    }
}