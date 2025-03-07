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

  removeTask(taskIdToRemove) {
    const { arrayTodoList } = this.state;
    const filtredArray = arrayTodoList.filter(
      (task) => task.id !== taskIdToRemove
    );
    this.setState({ arrayTodoList: filtredArray });
  }

  renderLi() {
    const { arrayTodoList } = this.state;
    return arrayTodoList.map((task) => (
      <li key={task.id}>
        {task.text}
        <button
          onClick={() => {
            this.removeTask(task.id);
          }}
        >
          Delete
        </button>
      </li>
    ));
  }

  render() {
    return (
      <>
        <h2>Todo List</h2>
        <ul>{this.renderLi()}</ul>
      </>
    );
  }
}

export default TodoList;
