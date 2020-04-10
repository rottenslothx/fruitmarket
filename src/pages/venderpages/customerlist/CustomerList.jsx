import React, { Component } from "react";
import { Table } from "semantic-ui-react";
import userModel from "../../../storage/users";

class CustomerList extends Component {
  state = { data: [] };

  async componentDidMount() {
    this.setState({ data: userModel.getUsers() });
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
              <Table.HeaderCell width="4">Balance</Table.HeaderCell>
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
                    {user.firstname} {user.lastname}
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
