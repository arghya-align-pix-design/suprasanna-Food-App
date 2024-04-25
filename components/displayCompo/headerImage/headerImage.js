import React,{Component} from "react";
import "../reqCss/HeaderPic.css"

export default class HeaderPic extends Component{
    render(){
        return(
            <>
            <div className="imgCont">
              <img className="image"  src="https://imgs.search.brave.com/7XfbOytqwIzWQmnPVCw1Gaq1RSFL6ho7VZXyWABR_XA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9waG90by1jb2xs/YWdlLXNldC1mb29k/LWRpc2hlcy1ibGFj/ay1zdG9uZS1iYWNr/Z3JvdW5kXzE4NzE2/Ni0zNDgwMi5qcGc_/c2l6ZT02MjYmZXh0/PWpwZw"  alt="FOODFIEST" />
              </div>
            </>
        )
    }
}