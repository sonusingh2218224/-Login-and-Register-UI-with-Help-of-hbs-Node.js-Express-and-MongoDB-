import { Router } from "express";
import Users from "../models/Users.js";
import bcrypt from "bcrypt";
import swal from "sweetalert";

// create product

async function CreateUser(req, res) {
  try {
    // let data = await Users.create(req.body);
    let { name, email, password } = req.body;
    // bcrypt password use

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);

    let result = await Users.create({
      name,
      email,
      password: hash,
    });

    res.status(201).redirect("/login");

    // suceess: true,
    // result: {
    //   name: result.name,
    //   email: result.email,
    // },
  } catch (error) {
    res.status(400).send(error);
  }
}

// get prodcut (read data);
async function getUser(req, res) {
  try {
    let data = await Users.find();
    res.status(201).send("data");
  } catch (error) {
    res.status(400).send(error);
  }
}
// single data then use by id

async function getUserById(req, res) {
  try {
    let data = await Users.findById(req.params.id);
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
}

async function deleteUSer(req, res) {
  try {
    let data = await Users.findByIdAndUpdate(req.params.id);
    res.status(201, "delete sucessfully").send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function updateUser(req, res) {
  try {
    let _id = req.params.id;
    let data = await Users.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { CreateUser, getUser, getUserById, deleteUSer, updateUser };
