import React from "react";
import ReactDOM from "react-dom";
import Title from "./Title";

export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }
  render() {
    //this.props.changeTitle("New Title from header on props");
    console.log(this.props);
    //return <header>Header</header>;
    return (
      <div>
        <Title title={this.props.title} />
        <input
          value={this.props.title}
          onChange={this.handleChange.bind(this)}
        />
        <p>{this.props.description} from props</p>
      </div>
    );
  }
}
