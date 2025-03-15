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

  renderUsers = () => {
    const { users } = this.state;
    return users.map((user) => (
      <UserCard  user={user} key={user.login.uuid}/>
    ));
  };

  clickHandler = () => {
    getUsers().then(data =>{
      const{results}=data
      
      const tempArray = this.state.users
      tempArray.push(results[0])

      this.setState({
        users:tempArray
      })
    })
  }


  render() {
    const { users } = this.state;

    return (
      <>
        <h1 className="header-text">Users list</h1>
        <button onClick={() => this.clickHandler()}>Add user</button>
        <section className="card-container">{users.length ? this.renderUsers() : null}</section>

      </>
    );
  }
}

export default UserList;

/*
Реалізувати таку логіку щоб за замовченням ми підвантажували 100 користувачів


Отримуємо користувачів з БД (https://randomuser.me/)
Зробити інпут завдяки якому можна буде фільтрувати користувачів за прізвищем

Зробити ще один інпут з кнопкою, де ви можете вказати, яку кількість корстувачів
ви маєте підгрузити

*/
