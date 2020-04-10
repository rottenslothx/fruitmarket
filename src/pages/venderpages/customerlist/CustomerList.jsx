import React, { Component } from "react";
import axios from "axios";
import { Table } from "semantic-ui-react";

class CustomerList extends Component {
  state = { data: [] };

  async componentDidMount() {
    const result = await axios.get("http://localhost:8080/users");
    var result2 = [];
    var count = 0;
    for (var i in result.data) {
      count++;
      result.data[i].id = count;
      result2.push(result.data[i]);
    }
    this.setState({ data: result2 });
  }

  render() {
    return (
      <container>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width="2">ID</Table.HeaderCell>
              <Table.HeaderCell width="4">Name</Table.HeaderCell>
              <Table.HeaderCell width="4">E-mail address</Table.HeaderCell>
              <Table.HeaderCell width="4">Phone</Table.HeaderCell>
              <Table.HeaderCell width="4">All time spend</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.state.data.map((user, key) => (
              <Table.Row>
                <Table.Cell width="2">
                  <div>{user.id}</div>
                </Table.Cell>
                <Table.Cell width="4">
                  <div>
                    {user.firstName} {user.lastName}
                  </div>
                </Table.Cell>
                <Table.Cell width="4">
                  <div>{user.email}</div>
                </Table.Cell>
                <Table.Cell width="4">
                  <div>{user.phone}</div>
                </Table.Cell>
                <Table.Cell width="3">({user.money})</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </container>
    );
  }
}

export default CustomerList;
