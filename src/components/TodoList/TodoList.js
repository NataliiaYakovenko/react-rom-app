import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from './TodoForm/TodoForm'
import styles from './TodoList.module.css'



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

  removeTask = (taskIdToRemove) => {
    const { arrayTodoList } = this.state;
    const filtredArray = arrayTodoList.filter(
      (task) => task.id !== taskIdToRemove
    );
    this.setState({ arrayTodoList: filtredArray });
  };

  formHandler = (text) => {
    const { arrayTodoList } = this.state;
    const newObject = {
      id: arrayTodoList.length +1,
      text: text,
    };
    const newArray = [...arrayTodoList, newObject];

    this.setState({
      arrayTodoList: newArray,
    });
  };

  render() {
    const { arrayTodoList } = this.state;
    return (
      <>
        <h2>Todo List</h2>
        <TodoForm onAdd={this.formHandler} />
        <ul className={styles.container}>
          {arrayTodoList.map((task) => (
            <TodoItem
              key={task.id}
              id={task.id}
              text={task.text}
              onDelete={this.removeTask}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default TodoList;
