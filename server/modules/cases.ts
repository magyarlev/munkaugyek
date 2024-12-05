import mongoose from "mongoose";

const Schema = mongoose.Schema;
const caseSchema = new Schema({
  id: Number,
  name: String,
  author: String,
  description: String,
});

export default mongoose.model("case", caseSchema, "cases");
