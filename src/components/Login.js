import React from "react";
import {useState, useEffect} from "react"
import {json, useNavigate} from 'react-router-dom'
import { Link, Routes, Route} from 'react-router-dom'



function Login(){
    const [values, setValues] = useState({
        username:"",
        password:""
    })

    
    const handleUsername = event => {
     setValues({...values, username: event.target.value})
    }
    const handlePassword = event => {
        setValues({...values, password: event.target.value})
    }
    const Navigate = useNavigate()
    const handleSub = event => {
        event.preventDefault();
    }
  


    async function BringUsers(){
        let userInfo = await fetch(`https://jsonplaceholder.typicode.com/users?name=${values.username}`)
        let userInfoJson = await userInfo.json()
        for(let i = 0; i < userInfoJson.length; i++){
            let pass = userInfoJson[i].address.geo.lat
            let lastfour = String(pass).slice(-4)

            if(values.username === userInfoJson[i].name && values.password === lastfour)
            {localStorage.setItem('person',JSON.stringify({name: values.username,password: values.password}))
             Navigate("/Home")}else {alert("user not found")}
            return
        }
    }
    
    
    return(
        
        <div>
            {/* <Link to={"/"}>Login</Link> */}

            <h1>Login page</h1>
            <form onSubmit={handleSub}>
                <input name="username" type={"text"} value={values.username} placeholder={"username"} onChange={handleUsername} required></input>
                <input name="password" type={"password"} value={values.password} placeholder={"password"} onChange={handlePassword} required></input>
                <input type={"submit"} value="Login" onClick={() => BringUsers()}></input>
            </form>
        </div>
    )
}

export default Login


