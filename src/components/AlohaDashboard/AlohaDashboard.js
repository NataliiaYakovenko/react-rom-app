import React from "react";
import Aloha from "../Aloha";

class AlohaDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersArray: [
        {
          firstName: "Nataliia",
          lastName: "Yakovenko",
        },
        {
          firstName: "Roland",
          lastName: "Symonian",
        },
        {
          firstName: "David",
          lastName: "Brokovich",
        },
        {
          firstName: "Taylor",
          lastName: "Covalskiy",
        },
        {
          firstName: "Jon",
          lastName: "Travolte",
        },
      ],
    };
  }

  userToAloha() {
    const { usersArray } = this.state;
    return usersArray.map((user) => (
      <Aloha firstName={user.firstName} lastName={user.lastName} />
    ));
  }

  sortUsers() {
    const { usersArray } = this.state;
    const newArray = [...usersArray];
    newArray.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
    this.setState({
        usersArray:newArray
    })
  }

  render() {
    return (
      <>
        <button onClick={() => {this.sortUsers()}} >Sort</button>
        {this.userToAloha()}
      </>
    );
  }
}

export default AlohaDashboard;
