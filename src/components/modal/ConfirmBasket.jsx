import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
const friendOptions = [
  {
    key: "1",
    text: "1 กก.",
    value: "1",
  },
  {
    key: "3",
    text: "3 กก.",
    value: "3",
  },
  {
    key: "5",
    text: "5 กก.",
    value: "5",
  },
  {
    key: "10",
    text: "10 กก.",
    value: "10",
  },
  {
    key: "20",
    text: "20 กก.",
    value: "20",
  },
  {
    key: "50",
    text: "50 กก.",
    value: "50",
  },
  {
    key: "100",
    text: "100 กก.",
    value: "100",
  },
];

const ModalBasicExample = (props) => (
  <Modal
    trigger={
      <Button inverted color="orange">
        ใส่ตะกร้า
      </Button>
    }
    basic
    size="small"
  >
    <Header icon="archive" content={props.title} />
    <Modal.Content>
      <p>แก้ไขจำนวนสินค้า</p>
      <Dropdown
        placeholder="กรุณาเลือกจำนวนสินค้า"
        fluid
        selection
        options={friendOptions}
      />
    </Modal.Content>
    <Modal.Actions>
      <Button basic color="red" inverted>
        <Icon name="remove" /> No
      </Button>
      <Button color="green" inverted>
        <Icon name="checkmark" /> ยืนยัน
      </Button>
    </Modal.Actions>
  </Modal>
);

export default ModalBasicExample;
