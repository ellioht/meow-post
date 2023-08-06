import { Schema, model, models } from "mongoose"; 

const MeowSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Creator is required"],
  },
  meow: {
    type: String,
    required: [true, "Meow is required"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required"],
  },
  likes: {
    type: Number,
    default: 0,
    required: [true, "Likes is required"],
  },
  likedBy: [{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Creator is required"],
  }],
  createdAt: {
    type: Date,
    default: Date.now,
    required: [true, "Date created is required"],
  },
});

const Meow = models.Meow || model("Meow", MeowSchema);

export default Meow;