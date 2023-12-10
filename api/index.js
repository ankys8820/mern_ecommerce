const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
require("./db");

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products/", productRoute);
app.use("/api/carts/", cartRoute);
app.use("/api/orders/", orderRoute);

app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ON ${process.env.PORT}`);
});
