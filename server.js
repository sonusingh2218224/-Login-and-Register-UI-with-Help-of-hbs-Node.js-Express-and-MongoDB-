import express from "express";
import dotenv from "dotenv";
import hbs from "hbs";
import multer from "multer";

//seeders for fake data
// import createFakerProducts from "./seeders/productSeeders.js";

//Routes Imports
import productsRoutes from "./routes/productsRoutes.js";
import userRouter from "./routes/userRoutes.js";
import authLogin from "./routes/authLogin.js";
import { login } from "./controllers/authUser.js";

import connectDB from "./ConnectDB.js";
import { CreateUser, getUser } from "./controllers/userControllers.js";

// import createFakerProducts from "./seeders/productSeeders.js";

//hbs handle
const app = express();
app.use(express.json());
//upload file
app.use(express.urlencoded({ extended: false }));

dotenv.config();

connectDB();
// createFakerProducts(50);

app.set("view engine", "hbs");
app.set("views", "views");
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/data", function (req, res) {
  connectDB.serialize(() => {
    connectDB.each(
      "SELECT id ID, name NAME FROM emp WHERE id =?",
      [req.body.id],
      function (err, row) {
        //db.each() is only one which is funtioning while reading data from the DB
        if (err) {
          res.send("Error encountered while displaying");
          return console.error(err.message);
        }
        res.send(` ID: ${row.id},    Name: ${row.name}  Name: ${row.email}`);
        console.log("Entry displayed successfully");
      }
    );
  });
});

//register
app.get("/register", (req, res) => {
  res.render("register");
});

//login
app.get("/login", (req, res) => res.render("login"));
//mongo data

app.use("/products", productsRoutes);
app.use("/users", userRouter);
app.use("/auth", authLogin);
app.use("/register", CreateUser);
app.use("/", login);
app.listen(process.env.PORT | 4000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
