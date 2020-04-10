import { useForm } from "react-hook-form";
import React from "react";
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Header,
  Icon,
  Message,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import LoginError from "../../components/alert/LoginError";
import { getFirestore } from "redux-firestore";
import userModel from "../../storage/users";

function SignIn() {
  React.useEffect(() => {
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true });
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    errors,
    setValue,
    triggerValidation,
  } = useForm();

  const onSubmit = (data, e) => {
    // console.log("Submit event", e);
    if (userModel.login(data)) {
      setTimeout(() => {
        window.location.href = "/products";
      }, 2000);
    }
  };
  // watch input value by passing the name of it

  return (
    <div>
      {false && <LoginError />}
      <br></br>

      <Grid columns="equal" verticalAlign="middle" container>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column align="center">
            <Header as="h2">
              <Icon name="user" color="blue" />
              <Header.Content>Log in</Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column align="center">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Input
                fluid
                name="email"
                label="Email"
                placeholder="Email"
                type="Email"
                onChange={async (e, { name, value }) => {
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                error={errors.email ? true : false}
              />

              <Form.Input
                fluid
                name="password"
                label="Password"
                placeholder="Password"
                type="password"
                onChange={async (e, { name, value }) => {
                  setValue(name, value);
                  await triggerValidation({ name });
                }}
                error={errors.password ? true : false}
              />

              <Form.Field>
                <Button primary type="submit" animated="fade" size="massive">
                  <Button.Content visible>Log in</Button.Content>
                  <Button.Content hidden>Let's go</Button.Content>
                </Button>
              </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default SignIn;
