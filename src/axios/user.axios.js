import axios from "axios";

export const signup=(email,name,password,phone)=>
    axios.post(`http://localhost:8080/api/register`,{
        email,name,password,phone
    })

