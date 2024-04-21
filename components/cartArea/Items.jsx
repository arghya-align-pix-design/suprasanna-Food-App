import styles from "./cartStyles/Item.module.css";
import ItemCard from "./ItemCard";
// import the mongodb function to get the data 

function Items(){

    //const itemData;//variable to hold the data for cart from db.

    return(
        <div className={styles.wrapper} >
            {itemData.map((item,i)=>(
                <ItemCard key={item.id} id={item.id}
                   name={item.name}
                   price={item.price}  />
            ))}

        </div>
    );
}

export default Items;