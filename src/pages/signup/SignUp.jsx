import { useForm } from "react-hook-form";
import React from "react";
import { Button, Form, Grid, Header, Icon, Loader } from "semantic-ui-react";
import RegisterSuccessful from "../../components/alert/RegisterSuccessful";
import RegisterErrAdyUsed from "../../components/alert/RegisterErrAdyUsed";
import RegisterConfirmPassword from "../../components/alert/RegisterConfirmPassword";
import userModel from "../../storage/users";
import { useHistory } from "react-router-dom";

function SignUp() {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmpassword] = React.useState("");

  const history = useHistory();
  //UI checker for error.
  const [success, setSuccess] = React.useState(false);
  const [adyUsed, setAdyUsed] = React.useState(false);
  const [notMatch, setNotMatch] = React.useState(false);
  const [confirmPasswordIsEmpty, setConfirmPasswordIsEmpty] = React.useState(
    false
  );

  React.useEffect(() => {
    register({ name: "firstname" }, { required: true });
    register({ name: "lastname" }, { required: true });
    register({ name: "email" }, { required: true });
    register({ name: "phone" }, { required: true });
    register({ name: "password" }, { required: true });
    register({ name: "confirmpassword" }, { required: false });
  }, []);

  const {
    register,
    handleSubmit,
    errors,
    setValue,
    triggerValidation,
  } = useForm();

  const onSubmit = (data, e) => {
    setAdyUsed(false);
    setNotMatch(false);
    setSuccess(false);
    if (data.confirmpassword === data.password) {
      if (userModel.checkEmail(data.email)) setAdyUsed(true);
      else {
        userModel.create(data);
        setSuccess(true);
        setNotMatch(false);
        setTimeout(() => {
          window.location.href = "/signin";
        }, 2000);
      }
    } else {
      setNotMatch(true);
    }
  };
  // watch input value by passing the name of it

  return (
    <div>
      {notMatch && <RegisterConfirmPassword />}
      {adyUsed && <RegisterErrAdyUsed />}
      {success && <RegisterSuccessful />}
      {/* {success && (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      )} */}
      <br></br>

      <Grid columns="equal" container>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column align="center">
            <Header as="h2">
              <Icon name="user" color="blue" />
              <Header.Content>Sign-up</Header.Content>
            </Header>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="First Name"
                  name="firstname"
                  placeholder="First Name"
                  type="text"
                  value={firstname}
                  onChange={async (e, { name, value }) => {
                    setValue(name, value);
                    setFirstname(value);
                    await triggerValidation({ name });
                  }}
                  error={errors.firstname ? true : false}
                />
                <Form.Input
                  fluid
                  label="Last Name"
                  name="lastname"
                  placeholder="Last Name"
                  type="text"
                  value={lastname}
                  onChange={async (e, { name, value }) => {
                    setValue(name, value);
                    setLastname(value);
                    await triggerValidation({ name });
                  }}
                  error={errors.lastname ? true : false}
                />
              </Form.Group>

              <Form.Input
                fluid
                name="email"
                label="Email"
                placeholder="Email"
                type="Email"
                value={email}
                onChange={async (e, { name, value }) => {
                  setValue(name, value);
                  setEmail(value);
                  await triggerValidation({ name });
                }}
                error={errors.email || adyUsed ? true : false}
              />

              <Form.Input
                fluid
                name="phone"
                label="Phone"
                placeholder="Phone number"
                type="number"
                value={phone}
                onChange={async (e, { name, value }) => {
                  setValue(name, value);
                  setPhone(value);
                  await triggerValidation({ name });
                }}
                error={errors.phone ? true : false}
              />

              <Form.Input
                fluid
                name="password"
                label="Password"
                placeholder="enter your Password"
                type="password"
                value={password}
                onChange={async (e, { name, value }) => {
                  setValue(name, value);
                  setPassword(value);
                  await triggerValidation({ name });
                }}
                error={errors.password || notMatch ? true : false}
              />

              <Form.Input
                fluid
                name="confirmpassword"
                label="Comfirm Password"
                placeholder="type your password again"
                type="password"
                value={confirmpassword}
                onChange={async (e, { name, value }) => {
                  setValue(name, value);
                  setConfirmpassword(value);
                  await triggerValidation({ name });
                }}
                error={
                  errors.confirmpassword || confirmPasswordIsEmpty || notMatch
                    ? true
                    : false
                }
              />

              <Form.Field>
                <Button primary type="submit" animated="fade" size="massive">
                  <Button.Content visible>Submit</Button.Content>
                  <Button.Content hidden>Confirm?</Button.Content>
                </Button>
              </Form.Field>
            </Form>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column>
            {success && (
              <Loader active inline="centered" size="large">
                Redirecting to login.
              </Loader>
            )}
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default SignUp;
