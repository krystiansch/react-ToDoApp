import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate
  };

  handleDate = e => {
    this.setState({
      date: e.target.value
    });
  };

  handleCheckbox = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleClick = () => {
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate
        });
      }
    } else {
      alert("Nazwa zadania min 2 znaki");
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    //pomnożone przez jeden by zmienić typ z stringa na number
    maxDate = maxDate + "-12-31";
    return (
      <div className="form">
        <input
          value={this.state.text}
          type="text"
          placeholder="dodaj zadanie"
          onChange={this.handleText}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          id="important"
          onChange={this.handleCheckbox}
        />
        <label htmlFor="important">Priorytet</label>
        <br />
        <label htmlFor="date">Do kiedy zrobić</label>
        <input
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <br />
        <button onClick={this.handleClick}>Dodaj zadanie</button>
      </div>
    );
  }
}

export default AddTask;
