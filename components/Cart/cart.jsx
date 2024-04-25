import React from "react";
import {useValue} from "../Contexts/ItemContext";
import CartCard from "./dishCard";
import style from "./Cart.module.css";

export default function Cart(){
    const {total,clear,cart,toggle}= useValue();
    return(
        <>
         <div className={style.cartModal} >
            <div className={style.closeButton} onClick={toggle}>
              X
            </div>
            <div className={style.clearButton} onClick={clear} > Clear </div>
            <div className={style.itemContainer}> 
              {cart.map((item)=>{
                return(
                    // <div className={style.cartCard} key={item.id} > 
                    //   <h1> {item.name}</h1>
                    //   <h3> {item.qty} </h3>
                    //   <h3> {item.qty*item.price} </h3>
                    //   <button onClick={handleRemove}> Remove </button>
                    // </div>
                    <CartCard name={item.name} price={item.price}
                     id={item.id} image={item.imgSrc}/>
                );
              })}
            </div>
            <div className={style.total} > 
              <div className={style.totalText} > Total </div>
              <div className={style.totalPrice} > {total} </div>
            </div>
         </div>
        </>
    );

}