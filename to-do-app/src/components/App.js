import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 7;

  state = {
    tasks: [
      {
        id: 0,
        text: "Zagrać wreszcie w Apexa",
        date: "2019-02-30",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: "Zrobić dobry uczynek",
        date: "2020-12-12",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: "Znaleźć pracę",
        date: "2019-03-01",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 3,
        text: "Obejrzeć serial na netflixie",
        date: "2019-03-19",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 4,
        text: "Kontynuować naukę Re-act",
        date: "2019-03-22",
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 5,
        text: "Pójść do sklepu",
        date: "2019-03-15",
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 6,
        text: "Sprawdzić pocztę",
        date: "2019-03-12",
        important: false,
        active: true,
        finishDate: null
      }
    ]
  };

  deleteTask = id => {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks
    });
  };

  changeTaskStatus = id => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    };
    this.counter++;
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }));
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TO DO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
