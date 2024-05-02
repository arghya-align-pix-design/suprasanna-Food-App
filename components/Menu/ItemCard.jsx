import React from "react";
import style from "./ItemCard.module.css";
/// import {useValue} from "./itemContext"; 

export default function ItemCard({name, price, imgSrc, id, handleAdd}){
    //const {handleAdd}=useValue();
    //const items= mongodb method
    return(
        <>
         <div className={style.dishCard} id={id}>
            <div className={style.dishCardImage} >
               {/* <img src={imgSrc} className={style.DishImg} alt="dish preview" /> */}
               <img src={`${imgSrc}`} className={style.DishImg} alt="dish preview" />
            </div>
           <div className={style.dishCardContent}> 
               {/* <div className={style.itemName}> {name} </div>
               <div className={style.itemPrice}> &#x2089 {price} </div>
               <div className={style.itemButtonWrapper}> */}

               <h3> {name} </h3>
               <p>  {price} </p>
               <button className={style.addToCart} 
                onClick={()=>{handleAdd(price, id)}} > Add to Cart </button> 
            </div>
            

         </div>
        </>
    );
}