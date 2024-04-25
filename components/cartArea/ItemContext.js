import {createContext, useState, useContext} from "react";
import cartModel from "./cartModal";

const itemContext=createContext();
function useValue(){
    const value=useContext(itemContext);
    return value;
}

function CustomItemContext({children}){

    const handleAdd=(prod)=>{
        const index=cart.findIndex((iteem)=>itemContext.id=== prod.id);

        if(index===-1){
            setCart([...cart,{...prod, qty:1}]);
            console.log();
            setTotal(total+prod.price);
        }else{
            cart[index].qty++;
            setCart(cart);
            console.log(cart);
            setTotal(total+cart[index].price);
        }
        setItem(item+1);
    }

    const handleRemove=(id)=>{
        const index=cart.findIndex((item)=>item.id ===id);
        
        if(index!== -1 && qty!==0)
        {
            cart[index].qty--;
            setItem(item-1);
            setTotal(total-cart[index].price);
            if(cart[index].qty===0){
                cart.splice(index-1);
            }
        }
        else{
            return;
        }
        setCart(cart);
    }

    const clear=()=>{
        setToal(0);
        setItem(0);
        setCart([]);
    }

    const toggle=()=>{
        setShowCart(!showCart);
    }

    return (
        <>
         <itemContext Provider value={{total, item, handleAdd, handleRemove, clear, toggle, cart}} >
           {showCart && <cartModal toggle={toggle}/>}
           {children}

         </itemContext>
        </>
    );
}

export {useValue};
export default CustomItemContext;