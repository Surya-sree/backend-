const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://suryasree160_db_user:7nOp0d8Aij7EbZEO@project.3kmszp6.mongodb.net/employeeapp"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
