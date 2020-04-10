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
      localStorage.setItem("users", JSON.stringify({ users }));
  },
  getActivedUser() {
    return localStorage.user;
  },
  getUsers() {
    return users;
  },
  checkEmail(email) {
    return users.find((user) => user.email === email);
  },
  create(body) {
    users = users.concat({
      email: body.email,
      firstname: body.firstname,
      lastname: body.lastname,
      money: 0,
      password: body.password,
      phone: body.phone,
      role: "user",
    });
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
    const user = thisUsers.users.find((user) => {
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
