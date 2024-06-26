// controllers/activeUserController.js
const ActiveUser = require("../models/ActiveUser");
const Image = require("../models/Image");

const signInUser = async (req, res) => {
  const { uid, email, displayName } = req.body;

  try {
    // Get a random image from the images collection
    const images = await Image.find();
    if (images.length === 0) {
      return res
        .status(500)
        .json({ message: "No images found in the database" });
    }
    const randomImage = images[Math.floor(Math.random() * images.length)];

    const activeUser = new ActiveUser({
      uid,
      email,
      displayName,
      imageUrl: randomImage.url,
    });
    await activeUser.save();
    res.status(201).json({ message: "User signed in", activeUser });
  } catch (error) {
    console.error("Error signing in user:", error); // Add logging
    res.status(500).json({ message: "Error signing in user", error });
  }
};

const signOutUser = async (req, res) => {
  const { uid } = req.body;

  try {
    const activeUser = await ActiveUser.findOneAndUpdate(
      { uid, signedOutAt: { $exists: false } },
      { signedOutAt: Date.now() },
      { new: true }
    );

    if (!activeUser) {
      return res
        .status(404)
        .json({ message: "User not found or already signed out" });
    }

    res.status(200).json({ message: "User signed out", activeUser });
  } catch (error) {
    res.status(500).json({ message: "Error signing out user", error });
  }
};

const getActiveUsers = async (req, res) => {
  try {
    const activeUsers = await ActiveUser.find({
      signedOutAt: { $exists: false },
    });
    res.status(200).json(activeUsers);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving active users", error });
  }
};

module.exports = { signInUser, signOutUser, getActiveUsers };
