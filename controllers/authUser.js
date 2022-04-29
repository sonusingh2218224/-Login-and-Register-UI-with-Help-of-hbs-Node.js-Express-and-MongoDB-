import User from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function login(req, res) {
  try {
    let result = await User.findOne({ email: req.body.email });
    console.log(req.body.email);
    if (!result) return res.status(404).send("User not found");
    let authResult = await bcrypt.compare(req.body.password, result.password);
    if (!authResult) return res.status(401).send("Incorrect Password");

    //jwt creation

    const token = jwt.sign(
      {
        id: result.id,
        email: result.email,
        isverified: result.isverified,
        role: result.role,
      },
      process.env.JWT_SECRET_KEY
    );

    res.status(201).send({ sucess: true, token });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { login };
