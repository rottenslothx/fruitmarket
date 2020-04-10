let users = [
  {
    id: 1,
    email: "admin@ff.com",
    firstname: "admin",
    lastname: "test",
    money: 1000,
    password: "12345",
    phone: "12345",
    role: "admin",
  },
  {
    id: 2,
    email: "test@test.com",
    firstname: "Mr. A",
    lastname: "lname1",
    money: 1500,
    password: "12345",
    phone: "12345",
    role: "user",
  },
];

let userModel = {
  initial() {
    if (!localStorage.getItem("users"))
      localStorage.setItem("users", JSON.stringify(users));
  },
  getUsers() {
    return JSON.parse(localStorage.getItem("users"));
  },
  getActivedUser() {
    return JSON.parse(localStorage.getItem("user"));
  },
  checkEmail(email) {
    const thisUsers = JSON.parse(localStorage.getItem("users"));
    return thisUsers.find((user) => user.email === email);
  },
  addMoney(amount, id) {
    let thisUsers = JSON.parse(localStorage.getItem("users"));
    let newUser;
    thisUsers.map((user) => {
      if (user.id === id) {
        user.money = user.money + amount;
        newUser = user;
      }
    });
    localStorage.setItem("users", JSON.stringify(thisUsers));
    localStorage.setItem("user", JSON.stringify(newUser));
    return thisUsers;
  },
  create(body) {
    let thisUsers = JSON.parse(localStorage.getItem("users"));
    console.log(thisUsers[2]);
    const thisUsers2 = thisUsers.concat({
      id: thisUsers[thisUsers.length - 1].id + 1,
      email: body.email,
      firstname: body.firstname,
      lastname: body.lastname,
      money: 0,
      password: body.password,
      phone: body.phone,
      role: "user",
    });
    localStorage.setItem("users", JSON.stringify(thisUsers2));
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: body.email,
        firstname: body.firstname,
        lastname: body.lastname,
        money: 0,
        password: body.password,
        phone: body.phone,
        role: "user",
      })
    );
    return localStorage.user;
  },
  login(body) {
    let thisUsers = JSON.parse(localStorage.getItem("users"));
    const user = thisUsers.find((user) => {
      return user.email === body.email && user.password === body.password;
    });
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else return false;
  },
  logout() {
    localStorage.removeItem("user");
  },
};

export default userModel;
