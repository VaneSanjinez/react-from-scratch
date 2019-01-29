import React from "react";
import ReactDOM from "react-dom";
import Title from "./Title";

export default class Header extends React.Component {
  render() {
    console.log(this.props);
    //return <header>Header</header>;
    return (
      <div>
        <Title title={this.props.title} />
        <input />
        <p>{this.props.description}</p>
      </div>
    );
  }
}
