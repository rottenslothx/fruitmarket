import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import ConfirmBasket from "../modal/ConfirmBasket";
import userModel from "../../storage/users";

function CardProduct(props) {
  const [loggedin, setLoggedin] = React.useState(false);
  React.useEffect(() => {
    setLoggedin(userModel.getActivedUser());
  }, []);

  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="large" src={props.imageUrl} />
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>{props.count}</Card.Meta>
        <Card.Description>
          <strong>{props.detail}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Meta>{props.price}</Card.Meta>
      <Card.Content extra>
        <div className="ui two buttons">
          {loggedin && <ConfirmBasket title={props.title} />}
        </div>
      </Card.Content>
    </Card>
  );
}

export default CardProduct;
