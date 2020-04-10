import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  state = { data: [] };

  async componentDidMount() {
    const result = await axios.get("http://jsonplaceholder.typicode.com/users");
    this.setState({ data: result.data });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.data.map((user) => (
            <div>{user.name}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
