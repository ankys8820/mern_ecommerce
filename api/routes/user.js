const router = require("express").Router();
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const User = require("../models/User");
const CryptoJs = require("crypto-js");

// Update the User
router.put("/update/:id", verifyTokenAndAuthorization, async (req, res) => {
  // If User needs to change the password
  if (req.body.password) {
    req.body.password = CryptoJs.AES.encrypt(
      req.body.password,
      "SECRET"
    ).toString();
  }
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).send(updateUser);
  } catch (error) {
    res.status(500).send({ error });
  }
});
// delete the user
router.delete("/delete/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "User has been deleted!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get User
router.get("/findUser/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...other } = user._doc;

    res.status(200).send(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get all users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const user = query
      ? User.find().sort({ _id: -1 }).limit(5)
      : await User.find;
    // const { password, ...other } = user._doc;
    res.status(200).send(user);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Get User Stats
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
