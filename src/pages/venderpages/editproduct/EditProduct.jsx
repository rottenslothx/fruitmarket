import React from "react";
import {
  Button,
  Card,
  Form,
  Image,
  Grid,
  Icon,
  Input,
  Container,
  Segment,
  Header,
  Modal,
} from "semantic-ui-react";
import { productlist } from "../../productlist/product";
import fruitModel from "../../../storage/fruits";
import { useForm } from "react-hook-form";

export default function EditProduct() {
  const [product, setProduct] = React.useState([]);
  const [price, setPrice] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState([]);
  const [fruitsProduct, setFruitsProduct] = React.useState([]);

  const [editAmount, setEditAmount] = React.useState();
  const [editPrice, setEditPrice] = React.useState([]);
  const [editActive, setEditActive] = React.useState([]);

  const [addName, setAddName] = React.useState();
  const [addDetail, setAddDetail] = React.useState([]);
  const [AddPrice, setAddPrice] = React.useState([]);
  const [addUrl, setAddUrl] = React.useState([]);
  const [addAmount, setAddAmount] = React.useState([]);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  React.useEffect(() => {
    setModalOpen(false);
    setFruitsProduct(fruitModel.get());
    setProduct(productlist.product());
    let sum = 0;
    productlist.product().map((i) => {
      sum += parseInt(i.price);
    });
    setPrice(sum);
  }, []);

  const {
    register,
    handleSubmit,
    errors,
    setValue,
    triggerValidation,
  } = useForm();

  const Add = () => {
    const body = {
      title: addName,
      detail: addDetail,
      count: addAmount,
      price: AddPrice,
      imageUrl: addUrl,
    };
    let result = fruitModel.create(body);
    window.location.reload();
  };

  const Edit = (data) => {
    const body = {
      id: data.id,
      title: data.title,
      detail: data.detail,
      count: editAmount,
      price: editPrice,
      imageUrl: data.imageUrl,
    }
    let result = fruitModel.modify(body);
    window.location.reload();
  };

  const Delete = (id) => {
    console.log(id)
    // let result = fruitModel.delete(id);
    // setModalOpen(false);
    // window.location.reload();
  };

  return (
    <div>
      <Container>
        <Grid celled>
          <Grid.Row columns={6}>
            <Grid.Column width={2}>
              <h1>ลำดับ</h1>
            </Grid.Column>
            <Grid.Column width={3}>
              <h1>ภาพ</h1>
            </Grid.Column>
            <Grid.Column width={4}>
              <h1>รายการสินค้า</h1>
            </Grid.Column>
            <Grid.Column width={2}>
              <h1>จำนวน</h1>
            </Grid.Column>
            <Grid.Column width={3} textAlign={"center"}>
              <h1>ราคา</h1>
            </Grid.Column>
            <Grid.Column width={2}>
              <h1>แก้ไข/ลบ</h1>
            </Grid.Column>
          </Grid.Row>

          {fruitsProduct.map((i, key) => (
            <Grid.Row columns={7}>
              <Grid.Column width={2}>
                <h1>{i.id}</h1>
              </Grid.Column>
              <Grid.Column width={3}>
                <Image floated="right" size="small" src={i.imageUrl} />
              </Grid.Column>
              <Grid.Column width={4}>
                <h1>{i.title}</h1>
              </Grid.Column>
              <Grid.Column width={2}>
                <h1>{i.count}</h1>
              </Grid.Column>
              <Grid.Column width={3} textAlign={"center"}>
                <h1>{i.price}</h1>
              </Grid.Column>
              <Grid.Column width={2}>
                <Modal
                  trigger={
                    <Button inverted color="blue">
                      แก้ไขจำนวน
                    </Button>
                  }
                >
                  <Modal.Header>แก้ไขรายการสินค้า</Modal.Header>
                  <Modal.Content>
                    <Form>
                      <Form.Field>
                        <label>จำนวน</label>
                        <Form.Input
                          name="amount"
                          placeholder="จำนวน"
                          onChange={async (e, { name, value }) => {
                            setValue(name, value);
                            setEditAmount(value);
                          }}
                        />
                      </Form.Field>
                      <Form.Field>
                        <label>ราคา</label>
                        <Form.Input
                          name="price"
                          placeholder="ราคา"
                          onChange={async (e, { name, value }) => {
                            setValue(name, value);
                            setEditPrice(value);
                          }}
                        />
                      </Form.Field>
                      <Button onClick={() => Edit(i)} color="green">
                        บันทึก
                      </Button>
                    </Form>
                    หากต้องการยกเลิกให้กดกลับ
                  </Modal.Content>
                </Modal>

                <Modal
                  open={modalOpen}
                  onClose={handleClose}
                  trigger={
                    <Button inverted color="red" onClick={handleOpen}>
                      ลบ
                    </Button>
                  }
                  basic
                  size="small"
                >
                  <Header icon="archive" content="ลบรายการสินค้า" />
                  <Modal.Content>
                    <p>คุณต้องการที่จะลบข้อมูลผลไม้ชิ้นนี้ ใช่หรือไม่</p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button basic color="red" inverted onClick={handleClose}>
                      <Icon name="remove" /> ไม่
                    </Button>
                    <Button onClick={() => Delete(i)} color="green" inverted>
                      <Icon name="checkmark" /> ใช่
                    </Button>
                  </Modal.Actions>
                </Modal>
              </Grid.Column>
            </Grid.Row>
          ))}
        </Grid>

        <Grid>
          <Grid.Row columns={5}>
            <Grid.Column width={2}>
              <h1></h1>
            </Grid.Column>
            <Grid.Column width={2}>
              <h1></h1>
            </Grid.Column>
            <Grid.Column width={2}>
              <h1></h1>
            </Grid.Column>
            <Grid.Column width={5}>
              <Modal
                trigger={
                  <Button inverted color="green" size="massive">
                    เพิ่ม
                  </Button>
                }
              >
                <Modal.Header>เพิ่มรายการสินค้า</Modal.Header>
                <Modal.Content>
                  <Form>
                    <Form.Field>
                      <label>ชื่อรายการสินค้า</label>
                      <Form.Input
                        placeholder="ตัวอย่างเช่น มะม่วง"
                        name="title"
                        onChange={async (e, { name, value }) => {
                          setValue(name, value);
                          setAddName(value);
                        }}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>ข้อมูลสินค้า</label>
                      <Form.Input
                        placeholder="ตัวอย่างเช่น มะม่วงสุก ดิบ"
                        name="detail"
                        onChange={async (e, { name, value }) => {
                          setValue(name, value);
                          setAddDetail(value);
                        }}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>url รูปภาพ</label>
                      <Form.Input
                        placeholder="ตัวอย่างเช่น มะม่วง http://picture...."
                        name="imageUrl"
                        onChange={async (e, { name, value }) => {
                          setValue(name, value);
                          setAddUrl(value);
                        }}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>จำนวน</label>
                      <Form.Input
                        placeholder="ตัวอย่างเช่น 1 2 10 20"
                        name="count"
                        onChange={async (e, { name, value }) => {
                          setValue(name, value);
                          setAddAmount(value);
                        }}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>ราคา</label>
                      <Form.Input
                        placeholder="ตัวอย่างเช่น 500 1000"
                        name="price"
                        onChange={async (e, { name, value }) => {
                          setValue(name, value);
                          setAddPrice(value);
                        }}
                      />
                    </Form.Field>
                    <Button onClick={() => Add()} color="green" onSubmit="">
                      เพิ่ม
                    </Button>
                  </Form>
                  หากต้องการยกเลิกให้กดกลับ
                </Modal.Content>
              </Modal>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
