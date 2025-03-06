import React from "react";
import Aloha from "../Aloha";

const usersArray =[
    {
        firstName: "Nataliia",
        lastName: "Yakovenko"
    },
    {
        firstName: "Roland",
        lastName: "Symonian"
    },
    {
        firstName: "David",
        lastName: "Brokovich"
    },
    {
        firstName: "Taylor",
        lastName: "Covalskiy"
    },
    {
        firstName: "Jon",
        lastName: "Travolte"
    }
]


class AlohaDashboard extends React.Component {
         userToAloha(){
            return usersArray.map((user)=> <Aloha firstName={user.firstName} lastName={user.lastName} />)
         }   


  render() {
    return (
      <>
       {this.userToAloha()}
      </>
    );
  }
}

export default AlohaDashboard;