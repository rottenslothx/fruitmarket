import React from "react";
import { Image, Grid, Input, Container } from "semantic-ui-react";
import { productlist } from "../productlist/product";

export default function Basket() {
  const [product, setProduct] = React.useState([]);
  const [price, setPrice] = React.useState([]);

  React.useEffect(() => {
    setProduct(productlist.product());
    let sum = 0;
    productlist.product().map((i) => {
      sum += parseInt(i.price);
    });
    setPrice(sum);
  }, []);

  return (
    <div>
      <Container>
        <Grid celled>
          <Grid.Row columns={5}>
            <Grid.Column width={2}>
              <h1>ลำดับ</h1>
            </Grid.Column>
            <Grid.Column width={3}>
              <h1></h1>
            </Grid.Column>
            <Grid.Column width={6}>
              <h1>รายการสินค้า</h1>
            </Grid.Column>
            <Grid.Column width={2}>
              <h1>จำนวน</h1>
            </Grid.Column>
            <Grid.Column width={3} textAlign={"center"}>
              <h1>ราคา</h1>
            </Grid.Column>
          </Grid.Row>

          {product.map((i, key) => (
            <Grid.Row columns={5}>
              <Grid.Column width={2}>
                <h1>{i.id}</h1>
              </Grid.Column>
              <Grid.Column width={3}>
                <Image floated="right" size="small" src={i.imageUrl} />
              </Grid.Column>
              <Grid.Column width={6}>
                <h1>{i.title}</h1>
              </Grid.Column>
              <Grid.Column width={2}>
                <h1>{i.count}</h1>
              </Grid.Column>
              <Grid.Column width={3} textAlign={"center"}>
                <h1>{i.price}</h1>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>

        <Grid>
          <Grid.Row columns={5}>
            <Grid.Column width={2}>
              <h1></h1>
            </Grid.Column>
            <Grid.Column width={3}>
              <h1></h1>
            </Grid.Column>
            <Grid.Column width={5}>
              <h1></h1>
            </Grid.Column>
            <Grid.Column width={3}>
              <h1>ราคาทั้งหมด</h1>
            </Grid.Column>
            <Grid.Column width={3} textAlign={"center"}>
              <h1>{price}</h1>[บาท]
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid>
          <Grid.Row columns={5}>
            <Grid.Column width={2}>
              <h1></h1>
            </Grid.Column>
            <Grid.Column width={3}>
              <h1></h1>
            </Grid.Column>
            <Grid.Column width={5}>
              <h1></h1>
            </Grid.Column>
            <Grid.Column width={4}>
              <Input
                action={{
                  color: "teal",
                  labelPosition: "left",
                  icon: "cart",
                  content: "Checkout [Baht]",
                }}
                actionPosition="left"
                placeholder=""
                defaultValue={price}
              />
            </Grid.Column>
            <Grid.Column width={3}>
              <p></p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
