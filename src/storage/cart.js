let cartModel = {
  getData() {
    // localStorage.setItem("users", JSON.stringify(users));
    return JSON.parse(localStorage.getItem("cart"));
  },
  addToCart() {
    let Cart = JSON.parse(localStorage.getItem("cart"));
    return JSON.parse(localStorage.getItem("user"));
  },
  Confirm() {
    const cart = JSON.parse(localStorage.getItem("cart"));
  },
};

export default cartModel;
