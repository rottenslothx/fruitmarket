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
import  fruitModel  from '../../../storage/fruits'

export default function EditProduct() {
  const [product, setProduct] = React.useState([]);
  const [price, setPrice] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState([]);
  const [fruitsProduct, setFruitsProduct] = React.useState([]);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  React.useEffect(() => {
    setModalOpen(false);
    setFruitsProduct(fruitModel.get())
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

          {fruitsProduct.map((i, key) => (
            <Grid.Row columns={7}>
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
              <Grid.Column width={3}>
                <Modal trigger={<Button inverted color="blue" size="massive">แก้ไขจำนวน</Button>}>
                  <Modal.Header>แก้ไขรายการสินค้า</Modal.Header>
                  <Modal.Content >
                    <Form>
                      <Form.Field>
                        <label>จำนวน</label>
                        <input placeholder='จำนวน' />
                      </Form.Field>
                      <Form.Field>
                        <label>ราคา</label>
                        <input placeholder='ราคา' />
                      </Form.Field>                     
                      <Button type='submit' color="green">บันทึก</Button>
                    </Form>
                    หากต้องการยกเลิกให้กดกลับ
                  </Modal.Content>
                </Modal>
              </Grid.Column>
              <Grid.Column width={3}>
                <Modal open={modalOpen} onClose={handleClose} trigger={<Button inverted color="red" size="massive" onClick={handleOpen} >ลบ</Button>} basic size='small' >
                <Header icon='archive' content='ลบรายการสินค้า' />
                  <Modal.Content>
                    <p>
                      คุณต้องการที่จะลบข้อมูลผลไม้ชิ้นนี้ ใช่หรือไม่
                    </p>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button basic color='red' inverted onClick={handleClose} >
                      <Icon name='remove' /> ไม่
                    </Button>
                    <Button type="submit" color='green' inverted >
                      <Icon name='checkmark' /> ใช่
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
              <Modal trigger={<Button inverted color="green" size="massive">เพิ่ม</Button>}>
                  <Modal.Header>เพิ่มรายการสินค้า</Modal.Header>
                  <Modal.Content >
                    <Form >
                      <Form.Field>
                        <label>ชื่อรายการสินค้า</label>
                        <input placeholder='ตัวอย่างเช่น มะม่วง' name='title' />
                      </Form.Field>
                      <Form.Field>
                        <label>ข้อมูลสินค้า</label>
                        <input placeholder='ตัวอย่างเช่น มะม่วงสุก ดิบ' name='detail' />
                      </Form.Field>
                      <Form.Field>
                        <label>url รูปภาพ</label>
                        <input placeholder='ตัวอย่างเช่น มะม่วง http://picture....' name='imageUrl' />
                      </Form.Field>
                      <Form.Field>
                        <label>จำนวน</label>
                        <input placeholder='ตัวอย่างเช่น 1 2 10 20' name='count'/>
                      </Form.Field>
                      <Form.Field>
                        <label>ราคา</label>
                        <input placeholder='ตัวอย่างเช่น 500 1000' name='price'/>
                      </Form.Field>                     
                      <Button type='submit' color="green" onSubmit="">เพิ่ม</Button>
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
