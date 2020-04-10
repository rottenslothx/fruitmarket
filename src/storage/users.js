let users = [
    {
      "email": "test@test.com",
      "firstname": "fname1",
      "lastname": "lname1",
      "money": "1000",
      "password": "12345",
      "phone": "12345",
      "role": "admin",
    },
    {
      "email": "test@test.com",
      "firstname": "fname2",
      "lastname": "lname1",
      "money": "1500",
      "password": "12345",
      "phone": "12345",
      "role": "user",
    }
  ]

let userModel = {
  get(){
    return users
  },
  delete(id) {

  },
  modify(id) {

  },
  create(body) {

  },
  login(body) {
    users.users.map( eachRow = () => {

    } )
  },
}

export default userModel;