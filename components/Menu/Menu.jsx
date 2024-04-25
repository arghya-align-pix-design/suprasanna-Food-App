import React from "react";
import {Link} from "react-router-dom";

export default function Menu(){
    return(
        <>
          <div className="listPage">
            <h3> MENU </h3>
            <div className="item-list" >
                {item.map((i)=>(
                    <div className="item" key={i.id} >
                        {/* Adding link to item details here */}
                        <Link to={`/list/${i.id}`} >
                          <h3> {i.name} </h3>
                          <img src={i.image}  alt="item picture" />
                        </Link>
                    </div>
                ))}
            </div>
          </div>
        </>
    )

}