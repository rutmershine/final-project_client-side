import React, { useState } from "react";
import axios from "axios"

function SignIn(){
    const[userName,setUserName]=useState("");
const[password,setPassword]=useState("");

const changeName=(name)=>{
    setUserName(name)
}
const changePassword=(pass)=>{
    setPassword(pass)
}
const signUp=(event)=>{
   
        event.preventDefault();
        // axios.get(`https://localhost:44307/api/users/GetAll`)
        //   .then((data) => {
        //     console.log(data.data)
            
        //        }, []);
         axios.post(` https://localhost:44307/api/users/AddUser`,{userName,password})
          .then((data) => {
            console.log(data.data)
            
               }, []);
              
}
   return(<>
     <input type="text" value={userName} onChange={(e)=>{changeName(e.target.value)}}></input>
     {userName}
     <input type="password"value={password} onChange={(e)=>{changePassword(e.target.value)}}></input>
     {password}
      <button type="submit" onClick={signUp}></button>
   </>)
}

export default SignIn;
  
 