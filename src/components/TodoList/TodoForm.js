
/*
Todolist - компонента, в якій відбувається управління списком задач і рендериться 
сам список задач 

Зробити компоненту TodoForm, яка буде представляти собою форму
- буде 1 input текст task
- буде кнопка, яка буде додавати task до списку у батьківській компоненті TodoList

TodoList - батьківська компонента

TodoForm - дочірня компонента

*/

import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //1. Створити відповідне поле у state, яке буде контролювати значення input
      taskText: "",
    };
  }

  //2. Зробити обробник зміни input onChange, який буде змінювати state
  /*Шаблон обробника інпута (можна використовувати до кожного інпута)*/
  textHandler = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  submitHandler=(event)=>{
    const {props:{onAdd}, state: {taskText}}=this
     event.preventDefault()

     onAdd(taskText)

     //очищаємо інпут після додавання тексту
     this.setState({
      taskText: ''
     })
  }

  render() {
    const { taskText } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        {/*  3. потрібно вказати, що value input контролюється state (це робиться атрибутом value) */}
        <input
          type="text"
          placeholder="Add your task"
          value={taskText}
          name='taskText'
          onChange={this.textHandler}
        />
        <button type="submit">Add task</button>
      </form>
    );
  }
}

export default TodoForm;
