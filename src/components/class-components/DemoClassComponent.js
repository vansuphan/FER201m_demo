import React, { Component } from "react";

export default class DemoClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "su", className: "1b" };
  }

  render() {
    const changeName = (e) => {
      this.setState({ name: "su change" });
    };

    return (
      <div>
        <input value={this.state.name}/>
        <h2>InputClassComponent_{this.props.componentName}</h2>
        <p>Name: {this.state.name}</p> <p>Class: {this.state.className}</p>
        <button onClick={changeName}>Change Name</button>
      </div>
    );
  }
}
