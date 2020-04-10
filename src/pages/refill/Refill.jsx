import React, { Component } from "react";
import { Grid, Segment, Button } from "semantic-ui-react";
import userModel from "../../storage/users";

export default class Refill extends Component {
  state = {
    money: 0,
  };

  componentDidMount() {
    if (userModel.getActivedUser())
      this.setState({ money: userModel.getActivedUser().money });
  }

  trigger = (amount) => {
    userModel.addMoney(amount, userModel.getActivedUser().id);
    if (userModel.getActivedUser())
      this.setState({ money: userModel.getActivedUser().money });
  };

  render() {
    return (
      <container>
        <br></br>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              <h1>ยอดเงินคงเหลือ : {this.state.money}</h1>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              <h1>เลือกเงินที่ต้องการเติม</h1>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              <Button
                inverted
                color="red"
                onClick={() => {
                  this.trigger(1000);
                }}
                size="massive"
              >
                1000
              </Button>
              <Button
                inverted
                color="red"
                onClick={() => {
                  this.trigger(3000);
                }}
                size="massive"
              >
                3000
              </Button>
              <Button
                inverted
                color="red"
                onClick={() => {
                  this.trigger(5000);
                }}
                size="massive"
              >
                5000
              </Button>
            </Grid.Column>
            <Grid.Column></Grid.Column>
          </Grid.Row>
        </Grid>
      </container>
    );
  }
}
