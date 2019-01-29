import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component {
  constructor() {
    super();
    this.state = { name: "Vanessa", title: "This title is from state" };
  }
  render() {
    const title = "Welcome Vane!!!!";
    const description = "This is the description";
    // setTimeout(() => {
    //   this.setState({ name: "Brenda" });
    // }, 1000);
    return (
      <div>
        {this.state.name}
        <Header name={"Something"} title={title} description={description} />
        <Footer />
      </div>
    );
  }
}
export default Layout;
