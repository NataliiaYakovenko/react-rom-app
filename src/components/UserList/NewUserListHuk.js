import React, { useState, useEffect } from "react";
import { getUsers } from "../../api";
import UserCard from "./UserCard";
import HashLoader from "react-spinners/HashLoader";

function NewUserListHuk() {
  const [users, setUsers] = useState([]);
  const [filtredUsers, setFiltredUsers] = useState([]);
  const [userCount, setUserCount] = useState(100);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  const loadPage = (options = {}) => {
    getUsers(userCount, page)
      .then((data) => {
        const { results } = data;

        setUsers(results);
      })

      .catch((error) => {
        setIsError(error);
      })

      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    loadPage();
  }, [page]);

  const renderUsers = () => {
    return filtredUsers.length > 0
      ? filtredUsers.map((user) => (
          <UserCard user={user} key={user.login.uuid} />
        ))
      : users.map((user) => <UserCard user={user} key={user.login.uuid} />);
  };

  const handleSearch = (event) => {
    const {
      target: { value: searchValue },
    } = event;

    //1 якщо в інпуту нічого немає, тоді чистемо масив відфільтрованих юзерів
    if (searchValue === "") {
      setFiltredUsers([]);

      return;
    }
    //2 фільтруємо по прізвищу
    const filtredUsers = users.filter(
      (user) =>
        user.name.last.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );

    //3 кладемо в стейт масив відфільтрованих users
    setFiltredUsers(filtredUsers);
  };

  const prevBtnHandler = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextBtnHandler = () => {
    setPage(page + 1);
  };

  const handleSetUserCount = (event) => {
    const {
      target: { value },
    } = event;
    setUserCount(value);
  };

  const clickHandler = () => {
    getUsers(1, page + 50).then((data) => {
      const { results } = data;

      // const tempArray = users;
      // tempArray.push(results[0]);

      // setUsers(tempArray);

      setUsers((prevUsers)=>{return [...prevUsers,results[0]]})
    });
  };

  return (
    <>
      <h1 className="header-text">Users list</h1>

      <input
        type="number"
        min={1}
        max={500}
        onChange={handleSetUserCount}
      ></input>

      <button onClick={() => loadPage}>Load users</button>
      <br />

      <input
        type="text"
        placeholder="Search by lastname"
        onChange={handleSearch}
      />
      <br />

      <button onClick={() => clickHandler()}>Add user</button>

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

      <button
        disabled={page === 1}
        onClick={prevBtnHandler}
        style={{ margin: "5px" }}
      >
        Previous page
      </button>
      <button onClick={nextBtnHandler}>Next page</button>

      <section className="card-container">
        {users.length ? renderUsers() : null}
      </section>
    </>
  );
}

export default NewUserListHuk;
