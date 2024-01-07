import axios from "axios";

export const signup=(email,name,password,phone)=>
    axios.post(`http://localhost:8080/api/register`,{
        email,name,password,phone
    })

    export const login=(email,password)=>
    axios.post(`http://localhost:8080/api/login`,{
        email,password
    })    

