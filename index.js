const express = require('express');
const app = express();

const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log('DB Connection Successfully.'))
  .catch((error) => {
    console.log("(╯°□°）╯︵ ┻━┻", error);
});

app.get("/api/test", () => {
    console.log("Test is successfull.")
})

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running.');
});
