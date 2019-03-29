import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Zadanie: Usuwanie z listy

class TodoInput extends React.Component {
  state = {
    value: ""
  };

  render() {
    console.log(this.state.value);

    return (
      <div>
        <input
          value={this.state.value}
          onChange={event => {
            this.setState({ value: event.target.value });
          }}
        />
        <button
          onClick={() => {
            this.props.onAddItem(this.state.value);
            this.setState({ value: "" });
          }}
        >
          KickMe!
        </button>
      </div>
    );
  }
}

function TodoList(props) {
  return (
    <div>
      <ul>{props.children}</ul>
    </div>
  );
}

function TodoItem(props) {
  return (
    <div>
      <li> {props.text} </li>
    </div>
  );
}

class App extends React.Component {
  state = {
    todos: ["item1", "item2", "item4"]
  };

  render() {
    return (
      <div>
        <TodoInput
          onAddItem={item => {
            this.setState({ todos: this.state.todos.concat(item) });
          }}
        />
        <TodoList>
          {this.state.todos.map(text => (
            <TodoItem text={text} />
          ))}
        </TodoList>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
