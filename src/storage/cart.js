import userModel from "./users";

let cartModel = {
  getData() {
    // localStorage.setItem("users", JSON.stringify(users));
    return JSON.parse(localStorage.getItem("cart"));
  },
  addToCart(name, amount) {
    let fruits = JSON.parse(localStorage.getItem("fruits"));
    let Cart = [];
    let fruit = fruits.fruits.find((item) => item.title === name);
    if (JSON.parse(localStorage.getItem("cart"))) {
      Cart = JSON.parse(localStorage.getItem("cart"));
      Cart = Cart.concat({
        imageUrl: fruit.imageUrl,
        title: fruit.title,
        amount: amount,
        price: fruit.price * amount,
      });
    } else
      Cart = Cart.concat({
        imageUrl: fruit.imageUrl,
        title: fruit.title,
        amount: amount,
        price: fruit.price * amount,
      });
    localStorage.setItem("cart", JSON.stringify(Cart));
  },
  Confirm(total) {
    const user = JSON.parse(localStorage.getItem("user"));
    userModel.addMoney(-total, user.id);
    localStorage.removeItem("cart");
  },
};

export default cartModel;
