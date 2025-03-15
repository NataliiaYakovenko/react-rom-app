import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskText: "",
    };
  }
  submitHandler = (event) => {
    event.preventDefault();

    const { taskText } = this.state;
    if (taskText === "") return;

    const { onAdd } = this.props;
    onAdd(taskText);

    this.setState({
      taskText: "",
    });
  };

  textHandler = (event) => {
    event.preventDefault();
    this.setState({
      taskText: event.target.value,
    });
  };

  render() {
    const { taskText } = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="Add your task"
          value={taskText}
          onChange={(event) => this.textHandler(event)}
        />
        <button type="submit">Add task</button>
      </form>
    );
  }
}

export default TodoForm;
