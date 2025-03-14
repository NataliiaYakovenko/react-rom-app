/*
Форма, яка вітається, повинна бути в середині батьківського форми.
В батьівській формі зберігається ім'я користувача у стейті.

Тобто, форма, у якій запитуєится ім'я користувача - дочірн форма.
Форма, у якій відображається вітання користувача - батьківська форма
Дити повинна передати батьку name user, щоб він зміг з ним привітатись.
*/
import React from "react";
import FormChild from "./FormChild";

class FormParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Anonym",
    };
  }
getStateFromChild=(username)=>{
   this.setState({
    name: username
   })
}

  render() {
    const{name}= this.state
    return (
      <>
        <FormChild sendUserNameToParent = {this.getStateFromChild} />
        <p>Hello {name}</p>
      </>
    );
  }
}

export default FormParent;
