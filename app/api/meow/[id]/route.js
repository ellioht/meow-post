import { connectToDatabase } from "@/utils/database";
import Meow from "@/models/meow";

// GET (read)
export const GET = async (req, { params }) => {
  try {
    await connectToDatabase();

    const meow = await Meow.findById(params.id).populate("creator");
    if (!meow) {
      return new Response("Meow not found", {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    return new Response(JSON.stringify(meow), {
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

// PATCH (update)
export const PATCH = async (req, { params }) => {
  const { userId, meow, tag } = await req.json();

  try {
    await connectToDatabase();

    const meowToUpdate = await Meow.findById(params.id);
    if (!meowToUpdate) {
      return new Response("Meow not found", {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    if (meowToUpdate.creator.toString() !== userId) {
      return new Response("Unauthorized", {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    meowToUpdate.meow = meow;
    meowToUpdate.tag = tag;

    await meowToUpdate.save();

    return new Response(JSON.stringify(meowToUpdate), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response("Failed to update meow", {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

// DELETE (delete)
export const DELETE = async (req, { params }) => {
  const { userId } = await req.json();

  try {
    await connectToDatabase();

    const meowToDelete = await Meow.findById(params.id);

    if (!meowToDelete) {
      return new Response("Meow not found", {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    if (meowToDelete.creator.toString() !== userId) {
      return new Response("Unauthorized", {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    await Meow.findByIdAndRemove(params.id);

    return new Response(JSON.stringify(meowToDelete), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response("Failed to delete meow", {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
