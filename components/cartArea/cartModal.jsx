import React, { useState,useEffect } from "react";
import axios from "axios";

export default function MyCart(){
    const [data,setData]= useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response= await axios.get('api/data');
                setData(response.data);

            }
            catch(err){
                console.log(err);
            }
        }
        fetchData();
    });

    return(
        <>
         <h2>Data from Mongodb: </h2>
         <ul>
            {data.map((item)=>(
                <li key={item.id}> {item.name} </li>
            ))}
         </ul>
        </>
    );

}