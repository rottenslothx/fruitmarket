let cartModel = {
  getData() {
    // localStorage.setItem("users", JSON.stringify(users));
    return JSON.parse(localStorage.getItem("cart"));
  },
  addToCart() {
    let Cart;
    let newCart;
    if (JSON.parse(localStorage.getItem("cart"))) {
      Cart = JSON.parse(localStorage.getItem("cart"));
    }
    localStorage.setItem("users", JSON.stringify(newCart));

    return JSON.parse(localStorage.getItem("user"));
  },
  Confirm() {
    const cart = JSON.parse(localStorage.getItem("cart"));
  },
};

export default cartModel;
