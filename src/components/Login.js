import React from "react";
import {useState} from "react"
import {json, useNavigate, Link} from 'react-router-dom'

function Login() {
    const [values, setValues] = useState({
        username: "",
        password: "",
    })
    // const [user, setUser] = useState()

    const handleUsername = event => {
        setValues({...values, username: event.target.value})
    }
    const handlePassword = event => {
        setValues({ ...values, password: event.target.value })
    }
    const Navigate = useNavigate()
    const handleSub = event => {
        event.preventDefault();
        // Navigate('/Home')
    }
    async function BringUsers(){
        let userInfo = await fetch("https://jsonplaceholder.typicode.com/users")
        let userInfoJson = await userInfo.json()
        for (let i = 0; i < userInfoJson.length; i++) {
            let pass = userInfoJson[i].address.geo.lat
            let lastfour = String(pass).slice(-4)
<<<<<<< HEAD
            values.username === userInfoJson[i].name && values.password === lastfour ? Navigate("/Home") : alert("user not found")
            return
        }
    }
    return(
=======

            if (values.username === userInfoJson[i].name && values.password === lastfour) {
                localStorage.setItem('person', JSON.stringify({ name: values.username, password: values.password }))
                Navigate("/home")
                setUser(userInfoJson[i])
            }
            else {
                alert("user not found")
            }


            return
        }
    }

    function logOut(){
        localStorage.removeItem('preson')
        Navigate("/login")
    }

    return (
>>>>>>> 3f3c3e672f12ce001f00ee6a53df0107824b2747
        <div>
            {/* <Link to={"/"}>Login</Link> */}

            <h1>Login page</h1>
            <form onSubmit={handleSub}>
                <p>{user}</p>
                <input name="username" type={"text"} value={values.username} placeholder={"username"} onChange={handleUsername} required></input>
                <input name="password" type={"password"} value={values.password} placeholder={"password"} onChange={handlePassword} required></input>
                <input type={"submit"} value="Login" onClick={() => BringUsers()}></input>
            </form>
        </div>
    )
}

export default Login


