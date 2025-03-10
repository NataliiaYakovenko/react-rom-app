import React from "react";
import { getUsers } from "../../api";
import UserCard from "./UserCard";

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    getUsers().then((data) => {
      const { results } = data;

      this.setState({
        users: results,
      });
    });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        {users.length > 0 ? (
          users.map((user) => <UserCard key={user.login.uuid} user={user} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

export default UserList;
