import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("Child constructor called");

    //creating state variable inside class based compenent

    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        login: "dummy",
        location: "default",
        updated_at: "dummy",
      },
    };
  }

  async componentDidMount() {
    console.log("Child component did mount called");

    // we do API call here . Once the component is laod it renders the data then it call the API and rerender the compoenet thats why
    //we do api Call under compoenentDidMount()

    const data = await fetch("https://api.github.com/users/nup26");
    const json = await data.json();
    console.log(json);

    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("component did update called");
  }

  componentWillUnmount() {
    console.log("component will unmount called");
  }

  render() {
    console.log("Child Render called");
    // Destruct
    // const { name } = this.props;

    //destruct state variable
    const { count, count2 } = this.state;

    const { login, location, updated_at } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Count : {count}</h2>
        <button
          onClick={() => {
            //Never update state variables directly
            // this.state.count=this.state.count+1

            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Count2 : {count2}</h2>
        <h2>login : {login}</h2>
        <h3>Location :{location}</h3>
        <h3>updated : {updated_at}</h3>
        <h4>Contact : @nupurgupta</h4>
      </div>
    );
  }
}

export default UserClass;
