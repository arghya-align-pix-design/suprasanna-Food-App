import { Component } from "react";
import "../reqCss/styling.css";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  

  render() {
    const { img, email, show } = this.props.person;
    const remove=this.props.func;
    return (
      <div className="person">
        <b onClick={()=>remove(show)} > X </b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
