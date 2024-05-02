import {useEffect}  from "react";
import {useNavigate} from "react-router-dom";

export default function ErrorPage(){
    const navigate=useNavigate();

    useEffect(()=>{
        setTimeout(()=> navigate(-1),30000);
        // after 30 mins pass , user get redirected to the immediate previous page.
    },[]);

    return(
    <>
       <h1> OOOPSS!!!!!!!!!!!!!  <br/>
         PAGE CONNECTION TIMED OUT, PLEASE, RELOAD AND RETRY!!
       </h1>
    </>
    );
}
