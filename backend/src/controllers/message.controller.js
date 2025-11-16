import cloudinary from "../lib/cloudinary.js";
import { getReceiverSocketId, io } from "../lib/socket.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getUserFromSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filterUsers = await User.find({
      _id: { $ne: loggedInUserId }, // Exclude logged-in user
    }).select("-password"); // Exclude password field
    res.status(200).json(filterUsers);
  } catch (error) {
    console.log("Error in getUserFromSidebar controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
export const getMessages = async (req, res) => {
  try {
    const { id: userToChatID } = req.params;
    const myId = req.user._id;
    const messages = await Message.find({
      $or: [
        // Find messages where either senderId or receiverId matches the logged-in user
        { senderId: myId, receiverId: userToChatID }, // Messages sent by logged-in user to the other user
        { senderId: userToChatID, receiverId: myId }, // Messages sent by the other user to logged-in user
      ],
    }).sort({ createdAt: 1 }); // Sort messages by creation time in ascending order
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessages controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let imageUrl;
    if (image) {
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageUrl = uploadResponse.secure_url;
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      text,
      image: imageUrl,
    });

    const fullMessage = await Message.findById(newMessage._id);

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", fullMessage);
    }

    const senderSocketId = getReceiverSocketId(senderId);
    if (senderSocketId) {
      io.to(senderSocketId).emit("newMessage", fullMessage);
    }

    res.status(201).json(fullMessage);
  } catch (error) {
    console.log("Error in sendMessage controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
