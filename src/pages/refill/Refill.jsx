import React, { Component } from "react";
import { Grid, Segment, Button } from "semantic-ui-react";

export default class Refill extends Component {
  state = {};
  render() {
    return (
      <container>
        <br></br>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column></Grid.Column>
            <Grid.Column>
              <h1>ยอดเงินคงเหลือ : 20000</h1>
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
              <Button inverted color="red" size="massive">
                1000
              </Button>
              <Button inverted color="red" size="massive">
                3000
              </Button>
              <Button inverted color="red" size="massive">
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
