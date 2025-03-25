import React from "react";
import { getUsers } from "../../api";
import UserCard from "./UserCard";
import HashLoader from "react-spinners/HashLoader";

class UserList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      filtredUsers: [],
      userCount: 100,
      isLoading: true,
      isError: false,
      page: 1,
    };
  }

  componentDidMount() {
    const { page } = this.state;
    this.loadPage(page);
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;

    if (prevState.page !== page) {
      this.loadPage(page);
    }
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
    if (searchValue === "") {
      this.setState({
        filtredUsers: [],
      });
      return;
    }
    //2 фільтруємо по прізвищу
    const filtredUsers = users.filter(
      (user) =>
        user.name.last.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );

    //3 кладемо в стейт масив відфільтрованих users
    this.setState({
      filtredUsers: filtredUsers,
    });
  };

  handleSrtUserCount = (event) => {
    const {
      target: { value },
    } = event;

    this.setState({
      userCount: value,
    });
  };

  handleLoadUsersClick = (page) => {
    const { userCount } = this.state;

    getUsers(userCount, page)
      .then((data) => {
        const { results } = data;

        const tempArray = this.state.users;
        results.forEach((user) => {
          tempArray.push(user);
        });

        this.setState({
          users: tempArray,
        });
      })
      .catch((error) => {
        this.setState({
          isError: error,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  loadPage = (page) => {
    const { userCount } = this.state;

    getUsers(userCount, page)
      .then((data) => {
        const { results } = data;

        this.setState({
          users: results,
        });
      })

      .catch((error) => {
        this.setState({
          isError: error,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  prevBtnHandler = () => {
    const { page } = this.state;

    if (page > 1) {
      this.setState({
        page: page - 1,
      });
    }
  };

  nextBtnHandler = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
  };

  render() {
    const { users, isLoading, isError,page } = this.state;
    console.dir(isError);

    return (
      <>
        <h1 className="header-text">Users list</h1>

        <input
          type="number"
          min={1}
          max={500}
          onChange={this.handleSrtUserCount}
        ></input>

        <button onClick={this.handleLoadUsersClick}>Load users</button>
        <br />

        <input
          type="text"
          placeholder="Search by lastname"
          onChange={this.handleSearch}
        />
        <br />

        <button onClick={() => this.clickHandler()}>Add user</button>

        {isLoading && (
          <HashLoader
            color="blue"
            size={300}
            cssOverride={{ display: "block", margin: "0 auto" }}
          >
            Users Loading ...
          </HashLoader>
        )}
        {isError && <h2>{isError.message}</h2>}

        <button disabled = {page ===1 } onClick={this.prevBtnHandler} style={{ margin: "5px" }} >
          Previous page
        </button>
        <button onClick={this.nextBtnHandler}>Next page</button>

        <section className="card-container">
          {users.length ? this.renderUsers() : null}
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
