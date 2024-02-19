import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("Parent constructor called");
  }

  componentDidMount() {
    //console.log("Parent component did mount called");
  }

  render() {
    //console.log("Parent render called");
    return (
      <div>
        <h1>About</h1>
        <h2>This is nameste reactweb series</h2>
        {/* <User name={"Nupur Gupta (functional based)"} location={"Jaipur"} /> */}

        <UserClass name={"Nupur Gupta (Class Based)"} />
        {/* <UserClass name={"Dhwani Gupta (Class Based)"} /> */}
      </div>
    );
  }
}

export default About;
