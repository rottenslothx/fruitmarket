import React from "react";
import { Message } from "semantic-ui-react";

const MessageExampleSuccess = () => (
  <Message
    error
    header="Please try another."
    content="You have already used that Email."
  />
);

export default MessageExampleSuccess;
