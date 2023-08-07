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
  },
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: [{
    type: Schema.Types.ObjectId,
    ref: "User",
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Meow = models.Meow || model("Meow", MeowSchema);

export default Meow;