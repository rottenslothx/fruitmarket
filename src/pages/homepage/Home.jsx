import React from "react";
import { productlist } from "../productlist/product";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Button,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

function Home() {
  const [product, setProduct] = React.useState([{}]);
  React.useEffect(() => {
    setProduct(productlist.product());
  }, []);

  React.useEffect(() => {}, [product]);

  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">
            <div></div>
          </Grid.Column>
          <Grid.Column width="8">
            <Carousel autoPlay>
              {product.map((i, key) => (
                <div key={key}>
                  <img
                    // style={{ width: "auto", height: "640px" }}
                    src={i.imageUrl}
                  />
                  <p className="legend">{i.title}</p>
                </div>
              ))}
            </Carousel>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        {/* Heads up! Grid.Row is not mandatory, Grid.Column is enough for grid to work */}
        <Grid.Row columns={5}>
          <Grid.Column>
            <h1>Best deal</h1>
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
            <Button animated as={Link} to="/promotion">
              <Button.Content visible>ทั้งหมด</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid.Row>
        {/* for Best deal */}
        <Grid.Row columns={5}>
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
            <p />
          </Grid.Column>
          <Grid.Column>
            <p />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default Home;
