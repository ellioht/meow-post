import { connectToDatabase } from "@/utils/database";
import Meow from "@/models/meow";

export const GET = async (req, res) => {
  try {
    await connectToDatabase();

    const meows = await Meow.find({}).populate("creator");

    return new Response(JSON.stringify(meows), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response("Failed to fetch meows", {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};