
import express from "express";
import cors from "cors";
import bodyParser from "body-parser"; 
import mongoose from "mongoose";
import userD from "./modoDBSchema/userD.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
// app.use(cors());
app.use(bodyParser.json());

app.use(cors({
  origin: "https://satpalsingh-portfolio.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

const mongoURL = process.env.MONGODB_URL; 
mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("MongoDB not connected :", err));

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required" });
  }

  try {
    const newMessage = new userD({ name, email, message });
    await newMessage.save();
    console.log("✅ New message saved:", newMessage);
    res.json({ success: true, message: "Message stored successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save message" });
  }
});

app.get("/messages", async (req, res) => {
  try {
    const messages = await userD.find().sort({ date: -1 });
    res.json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
