import React from "react";
import { Message } from "semantic-ui-react";

const MessageExampleSuccess = () => (
  <Message
    error
    header="Please try another."
    content="Confirm password not match!"
  />
);

export default MessageExampleSuccess;
