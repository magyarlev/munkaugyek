import mongoose from "mongoose";

const Schema = mongoose.Schema;
const itemSchema = new Schema({
  id: Number,
  name: String,
  author: String,
  description: String,
});

export default mongoose.model("item", itemSchema, "items");
