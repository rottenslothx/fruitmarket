import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import cartModel from "../../storage/cart";

const friendOptions = [
  {
    key: "1",
    text: "1 กก.",
    value: 1,
  },
  {
    key: "3",
    text: "3 กก.",
    value: 3,
  },
  {
    key: "5",
    text: "5 กก.",
    value: 5,
  },
  {
    key: "10",
    text: "10 กก.",
    value: 10,
  },
  {
    key: "20",
    text: "20 กก.",
    value: 20,
  },
  {
    key: "50",
    text: "50 กก.",
    value: 50,
  },
  {
    key: "100",
    text: "100 กก.",
    value: 100,
  },
];

const ModalBasicExample = (props) => {
  const [modalOpen, setModalOpen] = React.useState([]);
  const [value, setValue] = React.useState([]);

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  React.useEffect(() => {
    setModalOpen(false);
  }, []);

  const dropdownChange = (e, { value }) => {
    setValue(value);
  };

  const handleClick = () => {
    cartModel.addToCart(props.title, value);
    handleClose();
  };

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      trigger={
        <Button inverted color="orange" onClick={() => handleOpen()}>
          ใส่ตะกร้า
        </Button>
      }
      basic
      size="small"
    >
      <Header icon="archive" content={props.title} />
      <Modal.Content>
        <p>เลือกจำนวนสินค้า</p>
        <Dropdown
          placeholder="กรุณาเลือกจำนวนสินค้า"
          fluid
          selection
          options={friendOptions}
          onChange={dropdownChange}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button basic color="red" inverted onClick={handleClose}>
          <Icon name="remove" /> ปิด
        </Button>
        <Button color="green" inverted onClick={handleClick}>
          <Icon name="checkmark" /> ยืนยัน
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ModalBasicExample;
