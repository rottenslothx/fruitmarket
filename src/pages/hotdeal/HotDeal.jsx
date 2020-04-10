import React from "react";
import { Card, Grid, Input } from "semantic-ui-react";
import CardProduct from "../../components/cardProduct/CardProduct";
import fruitModel from "../../storage/fruits";

function HotDeal() {
  const [product, setProduct] = React.useState([]);
  React.useEffect(() => {
    setProduct(fruitModel.get());
  }, []);

  React.useEffect(() => {}, [product]);

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
