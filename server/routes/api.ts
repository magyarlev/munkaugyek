import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Item from "../modules/user";
import User from "../modules/user";

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

router.get("/item", async (req: Request, res: Response) => {
  try {
    let items = await Item.find({});
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
});

router.post("/item", async (req: Request, res: Response) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      author: req.body.author,
      description: req.body.description,
      id: req.body.id,
    });
    const registeredItem = await newItem.save();
    res.status(200).send("Item registered successfully").json(registeredItem);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
});

router.put("/item", async (req: Request, res: Response) => {
  try {
    const item = req.body;
    await item.findByIdAndUpdate(item._id, item);
    res.status(200).send("Item updated successfully");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

router.delete("/item", async (req: Request, res: Response) => {
  try {
    const itemId = req.body._id;
    await Item.findByIdAndDelete(itemId);
    res.status(200).send("Item deleted successfully");
  } catch (error) {
    res.status(500).send("Internal server error");
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

router.put("/user", async (req: Request, res: Response) => {
  try {
    const updatedUser = req.body;
    await User.findByIdAndUpdate(updatedUser._id, updatedUser);
    res.status(200).send("User updated successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

router.delete("/user", async (req: Request, res: Response) => {
  try {
    const userId = req.body._id;
    await User.findByIdAndDelete(userId);
    res.status(200).send("User deleted successfully");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

export default router;
