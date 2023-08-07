import { connectToDatabase } from "@/utils/database";
import Meow from "@/models/meow";

export const POST = async (req, res) => {
  const { userId, meow, tag } = await req.json();

  try {
    await connectToDatabase();

    const newMeow = new Meow({
      creator: userId,
      meow,
      tag,
    });

    await newMeow.save();

    return new Response(JSON.stringify(newMeow), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response("Failed to create a new meow", {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
