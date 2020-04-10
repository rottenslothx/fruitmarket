import React from "react";
import { Card, Grid, Input } from "semantic-ui-react";
import CardProduct from "../../components/cardProduct/CardProduct";
import LoginAlert from "../../components/alert/LoginAlert";
import fruitModel from "../../storage/fruits";
import userModel from "../../storage/users";

function MainProduct() {
  const [product, setProduct] = React.useState([]);
  const [loggedin, setLoggedinProduct] = React.useState(null);

  React.useEffect(() => {
    setProduct(fruitModel.get());
  }, []);

  React.useEffect(() => {
    setLoggedinProduct(userModel.getActivedUser());
  }, [product]);

  return (
    <div>
      {!loggedin && <LoginAlert />}
      <br></br>
      <Grid>
        <Grid.Row columns={5}>
          <Grid.Column>
            <h1>รายการสินค้าทั้งหมด</h1>
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
          <Grid.Column>
            <Input icon="search" placeholder="Search for some product" />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Card.Group>
        {product.map((i, key) => (
          <CardProduct
            key={key}
            title={i.title}
            count={i.count + " กก."}
            detail={i.detail}
            price={i.price}
            imageUrl={i.imageUrl}
          ></CardProduct>
        ))}
      </Card.Group>
    </div>
  );
}

export default MainProduct;
