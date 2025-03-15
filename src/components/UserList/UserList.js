import React from "react";
import { getUsers } from "../../api";
import UserCard from "./UserCard";

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      filtredUsers: [],
    };
  }

  componentDidMount() {
    getUsers(100).then((data) => {
      const { results } = data;

      this.setState({
        users: results,
      });
    });
  }

  renderUsers = () => {
    const { users, filtredUsers } = this.state;
    return filtredUsers.length > 0
      ? filtredUsers.map((user) => (
          <UserCard user={user} key={user.login.uuid} />
        ))
      : users.map((user) => <UserCard user={user} key={user.login.uuid} />);
  };

  clickHandler = () => {
    getUsers().then((data) => {
      const { results } = data;

      const tempArray = this.state.users;
      tempArray.push(results[0]);

      this.setState({
        users: tempArray,
      });
    });
  };

  handleSearch = (event) => {
    const {
      target: { value: searchValue },
    } = event;
    const { users } = this.state;

    //1 якщо в інпуту нічого немає, тоді чистемо масив відфільтрованих юзерів
    if (searchValue === '') {
      this.setState({
        filtredUsers: [],
      });
      return;
    }
    //2 фільтруємо по прізвищу
    const filtredUsers = users.filter(user => user.name.last.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
   

    //3 кладемо в стейт масив відфільтрованих users
    this.setState({
      filtredUsers: filtredUsers,
    });
   
  };

  render() {
    const { users } = this.state;

    return (
      <>
        <h1 className="header-text">Users list</h1>

     
        <input
          type="text"
          placeholder="Search by lastname"
          onChange={this.handleSearch}
        />

        <button onClick={() => this.clickHandler()}>Add user</button>
        <section className="card-container">
          {users.length ? this.renderUsers() : <h2>Users loading...</h2>}
        </section>
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
