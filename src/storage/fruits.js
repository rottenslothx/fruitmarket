let fruits = [
  {
    id: 1,
    title: "มะม่วง",
    count: 10,
    detail: "มะม่วงห่าม",
    price: 155,
    imageUrl:
      "https://f.btwcdn.com/store-34660/product/49e0623f-5e1d-9c4f-d254-5b7f69a49e9a.jpg",
  },
  {
    id: 2,
    title: "มะกรูด",
    count: 20,
    detail: "มะกรูดหวาน",
    price: 120,
    imageUrl:
      "https://i.pinimg.com/originals/d2/32/fa/d232fae1e2ab081c5ebf8f8c002743ac.jpg",
  },
  {
    id: 3,
    title: "มะนาว",
    count: 30,
    detail: "มะนาวลูกใหญ๋",
    price: 100,
    imageUrl:
      "https://image.makewebeasy.net/makeweb/0/LP7m63jDK/content/%E0%B8%A1%E0%B8%B0%E0%B8%99%E0%B8%B2%E0%B8%A7.jpg",
  },
];

let fruitModel = {
  initial() {
    if (!localStorage.getItem("fruits"))
      localStorage.setItem("fruits", JSON.stringify({ fruits }));
  },
  forceInsert() {
    console.log(">> Force insert");
    localStorage.setItem("fruits", JSON.stringify({ fruits }));
  },
  forceDelete() {
    console.log(">> Force insert");
    localStorage.removeItem("fruits");
  },
  get() {
    try {
      let fruit = JSON.parse(localStorage.getItem("fruits"));
      console.log(fruit);
      console.log(fruit.fruits);
      return fruit.fruits;
    }
    catch { return "" }
  },
  delete(id) {
    console.log(id)
    let fruitsData = this.get()
    let fruits = fruitsData.filter(function(value, index, arr) {
      return value.id != id;
    });
    console.log(fruits)
    localStorage.setItem("fruits", JSON.stringify({ fruits }));
    console.log(">> Delete data");
    return true;
  },
  modify(body) {
    let fruits = this.get()
    let newFruits = fruits.filter((fruit) => fruit.id !== body.id);
    newFruits.push({
      id: body.id,
      title: body.title,
      detail: body.detail,
      count: body.count,
      price: body.price,
      imageUrl: body.imageUrl,
    });
    fruits = newFruits;
    localStorage.setItem("fruits", JSON.stringify({ fruits }));
    return true;
  },
  create(body) {
    let fruits = this.get()
    let latestId = parseInt(fruits[fruits.length-1].id) +1
    fruits.push({
      id: latestId,
      title: body.title,
      detail: body.detail,
      count: body.count,
      price: body.price,
      imageUrl: body.imageUrl,
    });
    localStorage.setItem("fruits", JSON.stringify({ fruits:fruits }));
    return true;
  },
};

export default fruitModel;
