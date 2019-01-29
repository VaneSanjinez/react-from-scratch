import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends React.Component {
  constructor() {
    super();
    this.state = { title: "Welcome!" };
  }
  changeTitle(title) {
    this.setState({ title });
  }
  render() {
    const description = "This is the description";
    // setTimeout(() => {
    //   this.setState({ title: "Welcome Vane" });
    // }, 1000);
    return (
      <div>
        {this.state.name}
        <Header
          changeTitle={this.changeTitle.bind(this)}
          name={"Something"}
          title={this.state.title}
          description={description}
        />
        <Footer />
      </div>
    );
  }
}
export default Layout;
