
import express from "express";
import dotenv from 'dotenv';
import connectDB from "./backend/config/db.js";
// import products from './DB/products.js'
import productRoutes from "./backend/routes/productRoutes.js";
import userRoutes from "./backend/routes/userRoutes.js";
import orderRoutes from "./backend/routes/orderRoutes.js";
import { notFound, errorHandler } from "./backend/middleware/errorMid.js";
import path from 'path'

dotenv.config();

connectDB();

const app = express();
app.use(express.static(path.join(__dirname, 'eco/build')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//This code was commented out to work with heroku
// app.get("/", (req, res, next) => {
//     res.send("Backend Begins...");
// });

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("shopside/build"));
}

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/api/config/paypal", (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))



app.use(notFound);

app.use(errorHandler);


const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});