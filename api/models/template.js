import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
  name: { type: String, required: true },
  userId: { type: String, required: true },
  description: { type: String, required: true },
  createdTime: { type: Number, required: true },
  widgets: { type: Array, default: [] }
});

//Schema to Model
const Template = mongoose.model("Template", TemplateSchema);

export default Template;
