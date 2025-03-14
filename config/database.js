import mongoose from "mongoose";

async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to database.");
    mongoose.set("debug", true);
  } catch (error) {
    console.error("❌ Error in connecting to DB:", error);
    process.exit(1); // Exit the process on failure
  }
}

export default connect;
