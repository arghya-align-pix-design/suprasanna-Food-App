import React, { useState,useEffect } from "react";
import {useValue} from "./ItemContext";
import styles from "./cartStyles/cartModal.css";
//import axios from "axios";

export default function CartModal(toggle){
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
         <div className={styles.cartModal}>
            <div className={styles.closeButton}> Clear </div>
            <div className={styles.itemContainer}></div>
            <div className={styles.total}>
                <div className={styles.totalText}>Total</div>
                <div className={styles.totalPrice}>$Price</div>
            </div>
         </div>
         <ul>
            {data.map((item)=>(
                <li key={item.id}> {item.name} </li>
            ))}
         </ul>
        </>
    );

}