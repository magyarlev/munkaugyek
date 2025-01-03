import express, { Request, Response } from "express";
import mongoose from "mongoose";
import Item from "../modules/item";
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

router.get("/items", async (req: Request, res: Response) => {
  try {
    let items = await Item.find({});
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
});

router.post("/items", async (req: Request, res: Response) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      author: req.body.author,
      description: req.body.description,
      id: req.body.id,
    });
    const registeredItem = await newItem.save();
    res.status(200).json(registeredItem);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error.");
  }
});

router.put("/items", async (req: Request, res: Response) => {
  try {
    const item = req.body;
    const updatedItem = await Item.findByIdAndUpdate(item._id, item);
    if (updatedItem) {
      res.status(200).send("Item updated successfully");
    } else {
      res.status(500).send("Item not found");
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

router.delete("/items", async (req: Request, res: Response) => {
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
    res.status(200).send("User created successfully");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
});

router.put("/user", async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const updatedUserData = await User.findByIdAndUpdate(user._id, user);
    if (updatedUserData) {
      res.status(200).send("User updated successfully");
    } else {
      res.status(500).send("User not found");
    }
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
