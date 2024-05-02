import style from "./cartCard.module.css";
import React from "react";
//import { ITEMS } from "./cartItems.jsx";
//import {useParams} from "reat-router-dom";
//import {useValue} from "../Contexts/ItemContext.js";

function CartCard({name, price, id, image}){
   //const {handleRemove, increase,decrease}=useValue();
   //const dishData=0;//mongodb method to extract cartItems whole
  // const {itemId}=useParams();
   //const item=dishData.find((i)=> i.id === itemId ); 
   
  //  if(!item){
  //   return (<h3> Item Details not found </h3>);
  //  }


   return(
      <>
        <div className={style.cartItem} id={id} >
          <div className={style.cartItemImage}>
            <img src={image} alt="" />
          </div>
          <div className={style.cartItemDetails}> 
           <h3> name </h3>
           <p> price </p>
            <p> <button className={style.quantity}  > - </button>  {/*onClick={()=>decrease()*/}
                <span className={style.quantity}> qty </span>
                <button className={style.quantity}  > + </button>   {/*onClick={()=>increase()*/}
           </p>
          <p> <button className={style.removeButton} > Remove </button></p>  {/* onClick={()=> handleRemove(id)*/}

          </div>
           
          

         {/* 
            return(
                 <div className={style.cartCard} key={id} > 
                   <div className={style.imgArt}>
                     <img src={`${image}`} className={style.ImgArea}>
                   </div>
                 <div className={style.content}>
                      <h1> {name} </h1>
                      <p> {qty} </p>
                      <p> {qty*price} </p>
                      <button onClick={handleRemove}> Remove </button>
                  </div>
                    </div>
            )})
               
          }*/ }

        </div>
      </>
   );

}

export default CartCard;