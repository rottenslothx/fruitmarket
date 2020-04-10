import React from "react";
import { Message } from "semantic-ui-react";

const MessageExampleWarning = () => (
  <Message error size="tiny">
    <Message.Header>incorrect username or password.</Message.Header>
  </Message>
);

export default MessageExampleWarning;
