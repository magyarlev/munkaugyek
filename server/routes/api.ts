import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Cases from "../modules/cases";
import Users from "../modules/user";

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
    let cases = await Users.find({});
    res.status(200).json(cases);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
});

export default router;
