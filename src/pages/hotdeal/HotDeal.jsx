import React from "react";
import { Button, Card, Image, Grid, Icon, Input } from "semantic-ui-react";
import CardProduct from "../../components/cardProduct/CardProduct";
import { productlist } from "../productlist/product";

function HotDeal() {
  const [product, setProduct] = React.useState([]);
  React.useEffect(() => {
    setProduct(productlist.product());
  }, []);

  React.useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <div>
      <br></br>
      <Grid>
        <Grid.Row columns={5}>
          <Grid.Column>
            <h1>รายการสินค้าโปรโมชั่น</h1>
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
            <Input icon="search" placeholder="Search for promotion" />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Card.Group>
        {product.map((i, key) => (
          <CardProduct
            key={key}
            title={i.title}
            count={i.count}
            detail={i.detail}
            price={i.price}
            imageUrl={i.imageUrl}
          ></CardProduct>
        ))}
      </Card.Group>
    </div>
  );
}

export default HotDeal;
