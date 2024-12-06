import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Cases from "../modules/cases";
import User from "../modules/user";
import { emitWarning } from "process";
import user from "../modules/user";

const router = express.Router();
const db = "mongodb://localhost:27017/munkaügyek";

mongoose
  .connect(db)
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((error) => {
    console.error(error);
  });

router.get("/cases", async (req: Request, res: Response) => {
  try {
    let cases = await Cases.find({});
    res.status(200).json(cases);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
});

router.post("/user", async (req: Request, res: Response) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const registeredUser = await newUser.save();
    res.status(200).send("User created successfully").json(registeredUser);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

router.delete("/user", async (req: Request, res: Response) => {
  try {
    const userId = req.body._id;
    await user.findById(userId).deleteOne();
    res.status(200).send("User deleted successfully");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

export default router;
