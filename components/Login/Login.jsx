import React,{useEffect, useState, useRef} from "react";
import styles from"./Login.module.css";

export default function LoginForm(){
    const [formData, setformData] = useState({username:"", password:"" });

    //brings focus on the userName
    const userRef= useRef(null);
    
    useEffect(()=>{
        userRef.current.focus()
    },[]);

    // this function will create the connection to mongodb
    async function handleSubmit(e){

        e.preventDefault();
        userRef.current.focus();
        
        //const 

    }


    return(
        <>
        <div className="container">
        <center><div className={styles.LoginBox} >
            
             <form onSubmit={handleSubmit}>
              <label> Username </label>
              <input type="text" className="style.Login" placeholder="Enter Username pls" 
                ref={userRef} value={formData.username} 
                onChange={(e)=>setformData({username:e.target.value,
                password:formData.password }) } />
              <br/>
              <br/>
              <label> Password </label>
              <input className="password" placeholder="Enter the password" type="password"
              value={formData.password} 
              onChange={(e)=>setformData({username: formData.username,
            password: e.target.value}) }/><br/><br/>
            <button className="loginbtn"> LOGIN </button>
            </form>
          </div></center>
          </div>
        </>
    );
}