import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: String,
    role: Number,
    pronouns: String,
    phoneNumber: Number,
    followers: [String],
    following: [String],
    highlights: [Number],
    matches: [Number],
    teams: [Number],
    leagues: [Number],
  },
  { collection: "users" }
);
export default userSchema;
