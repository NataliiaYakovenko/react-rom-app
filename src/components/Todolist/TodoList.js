import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayTodoList: [
        {
          id: 1,
          text: "Go to work",
        },
        {
          id: 2,
          text: "To learn English",
        },
        {
          id: 3,
          text: "Go to gym",
        },
        {
          id: 4,
          text: "Practice JS",
        },
        {
          id: 5,
          text: "To have lunch",
        },
      ],
    };
  }

  deleteTask = (id) => {
    this.setState((prevState) => ({
      arrayTodoList: prevState.arrayTodoList.filter(task => task.id !== id)
    }))
  };

  render() {
    const { arrayTodoList } = this.state;
    return (
      <>
        <h2>Todo List</h2>
        <ul>
          {arrayTodoList.map((task) => (
            <li key={task.id}>{task.text}
              <button onClick={() => {this.deleteTask(task.id)}}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;
