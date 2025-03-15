import React from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

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

  addTask = (text) => {
    const { arrayTodoList } = this.state;
    const lastTask = arrayTodoList[arrayTodoList.length - 1]; //отримую останній елемент
    let newId = 0;
    if (lastTask !== undefined) {
      newId = lastTask.id + 1;
    }
    arrayTodoList.push({ id: newId, text: text });

    this.setState({
      arrayTodoList: arrayTodoList,
    });
  };

  render() {
    const { arrayTodoList } = this.state;
    return (
      <>
        <h2>Todo List</h2>
        <TodoForm onAdd={this.addTask} />
        <ul>
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

/*
Todolist - компонента, в якій відбувається управління списком задач і рендериться 
сам список задач 

Зробити компоненту TodoForm, яка буде представляти собою форму
- буде 1 input текст task
- буде кнопка, яка буде додавати task до списку у батьківській компоненті TodoList

TodoList - батьківська компонента

TodoForm - дочірня компонента

*/
