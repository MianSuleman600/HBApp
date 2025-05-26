import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  full_name: String,
  email: String,
  phone: String,
  address: String,
});

export default mongoose.model("Customer", CustomerSchema);
