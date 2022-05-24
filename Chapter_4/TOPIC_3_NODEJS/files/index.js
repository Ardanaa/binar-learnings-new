const { getData, createData } = require("./functions/files");

const payload = {
<<<<<<< HEAD
    name: "Ardana",
    age: 20,
=======
  name: "lkj",
  age: 50,
>>>>>>> c9aa2a37575caf2e14ff44adeb57aa4b290218d1
};

createData(payload);

const data = getData();

console.log(data.name);