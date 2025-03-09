import React from "react";
import Aloha from "./Aloha";

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

/*
Задача 1 
Створити компоненту TodoList
Ця компонента має в стейті масив об'єктів, 
в якому будуть знаходитись текст задачі та його id

Приблизно це може виглядат наступним чином
[
{ id: 1, text: go to party}
{ id: 2, text: meet friends}
]

Компонента рендерить список li, в середині якого один рядок з масиву
<ul>
  <li>go to party</li>
  <li>meet friends</li>
  <li>to learn English</li>
</ul>

Задача 2
В кожній li зробити кнопку за натисненням на яку 
цей елемент списку має зникнути (реалізувати видалення завдання)
(тобто оновити сейт таким чином щоб в масиві з об'єктами не було того, 
який пов'язаний з кнопкою)

*/
