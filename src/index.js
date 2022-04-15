const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log('DB Connection Successfully.'))
  .catch((error) => {
    console.log("(╯°□°）╯︵ ┻━┻", error);
});

app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is running.');
});
