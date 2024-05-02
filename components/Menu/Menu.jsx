import ItemCard from "./ItemCard";
import { useValue } from "../Contexts/ItemContext";
import ITEMS  from "./cartItems";
import style from "./Menu.module.css"
import React from "react";

export default function Menu(){

    const {handleAdd}= useValue();
    //const items= mongo method

    return(
        <>
         <div className={style.showRoom}>
            {items.map((item,i)=>(
                 <ItemCard name={item.name}, 
                 price={item.price}, 
                 imgSrc={item.src}, 
                 id={item.id}
                 handle={handleAdd}  /> 
    
            ))}
            
        </div> 
        
        {/* <div className={style.showRoom}>
        {  ITEMS.map((item,i)=>(
            <ItemCard key={item.id}
                title={item.title}
                details={item.details}
                handle={handleAdd}
            />
        ))

        }
        </div> */}

       
        </>
    );

}