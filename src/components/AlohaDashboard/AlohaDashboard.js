import React from "react";
import Aloha from "../Aloha";

class AlohaDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersArray: [
        {
          id: 1,
          firstName: "Nataliia",
          lastName: "Yakovenko",
        },
        {
          id: 2,
          firstName: "Roland",
          lastName: "Symonian",
        },
        {
          id: 3,
          firstName: "David",
          lastName: "Brokovich",
        },
        {
          id: 4,
          firstName: "Taylor",
          lastName: "Covalskiy",
        },
        {
          id: 5,
          firstName: "Jon",
          lastName: "Travolte",
        },
      ],
    };
  }

  userToAloha() {
    const { usersArray } = this.state;
    return usersArray.map((user) => (
      <Aloha key={user.id} firstName={user.firstName} lastName={user.lastName} />
    ));
  }

  sortUsers() {
    const { usersArray } = this.state;
    const newArray = [...usersArray];
    newArray.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
    this.setState({
      usersArray: newArray,
    });
  }

  render() {
    return (
      <>
        <button
          onClick={() => {
            this.sortUsers();
          }}
        >
          Sort
        </button>
        {this.userToAloha()}
      </>
    );
  }
}

export default AlohaDashboard;
