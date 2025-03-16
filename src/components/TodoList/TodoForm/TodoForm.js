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
import styles from "./TodoForm.module.css";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //1. Створити відповідне поле у state, яке буде контролювати значення input
      taskText: "",
      isInputValid: true,
    };
  }

  //2. Зробити обробник зміни input onChange, який буде змінювати state
  /*Шаблон обробника інпута (можна використовувати до кожного інпута)*/
  textHandler = ({ target: { value, name } }) => {
    if (value.includes("*") === true) {
      this.setState({
        isInputValid: false,
      });
    } else {
      this.setState({
        [name]: value,
        isInputValid: true,
      })
    }
  
  }
  submitHandler = (event) => {
    const {
      props: { onAdd },
      state: { taskText },
    } = this;
    event.preventDefault();

    onAdd(taskText);

    //очищаємо інпут після додавання тексту
    this.setState({
      taskText: "",
    });
  }

  render() {
    const { taskText, isInputValid } = this.state;

    const className = cx({
    [styles.input]: true,
    [styles.inValidInput]: !isInputValid,
    })

    return (
      <form onSubmit={this.submitHandler} className={styles.container}>
        {/*  3. потрібно вказати, що value input контролюється state (це робиться атрибутом value) */}
        <input className={className}
          type="text"
          placeholder="Add your task"
          value={taskText}
          name="taskText"
          onChange={this.textHandler}
        />
        <button type="submit">Add task</button>
      </form>
    );
  }
}

export default TodoForm;


function cx(objectClassNames){
 const cort = Object.entries(objectClassNames)
 const filteredArray = cort.filter((className,condition)=>condition)
 const mapArray = filteredArray.map(([className,condition])=>className)
 return mapArray.join(' ')

}

// const objectClassNames = {
//   className1: true,
//   className2: true,
//   className2: false

//  [ [className1, true],[className2, true],[className2, false] ]
//   =>
//   [ [className1, true],[className2, true] ]
//   =>
//   [ className1,className2 ]
//    =>
//   "className1 className2 "
// }