import {useState,useRef} from "react";

export default function Blog(){
    const [formData,setFormData]=useState({title:"", content:""}); //passing object to the useState
    const [blogs, setBlogs]=useState([]); //arrays to hold the blogs
    const focusRef=useRef("null");

    function handleSubmit(e){
        e.preventDefault();

        setBlogs([{title: formData.title, content: formData.content }, ...blogs]);
        console.log(blogs);
    }

    return(
        <>
         <h1> Write a Blog!!</h1>
         <div className="section">
            {/* Form to write blogs */}
            <form onSubmit={handleSubmit}>
                <Row label="Title">
                    <input className="input"
                      placeholder="Enter the title of the Blog..."
                      value={formData.title}
                      onChange={(e)=>setFormData({title:e.target.value ,
                      content: formData.content})} />
                </Row>
                <Row label="Content">
                <input className="Content"
                      placeholder="Enter the content of the Blog..."
                      value={formData.content}
                      onChange={(e)=>setFormData({title:formData.title ,
                      content: e.target.value})} />

                </Row>
                <button className="btn"> Add </button>
            </form>
            <hr />

            <h2> Blogs</h2>
            {/* Area to show the written blogs */}
            
                {blogs.map((blog,i)=>(
                    <div className="blog">
                       <h3> {blog.title} </h3>
                       <hr/>
                       <p>{blog.content}</p>    
                    </div>
                ))}
         </div>
        </>
    )

}

function Row(props){
    const {label}=props;
    return(
        <>
          <label> {label}  <br/> </label>
          {props.children}
          <hr/>
        </>
    )
}