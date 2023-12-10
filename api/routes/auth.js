const router = require("express").Router();
const User = require("../models/User");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJs.AES.encrypt(req.body.password, "SECRET").toString(),
  });
  //Save
  try {
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    // find user
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      res.status(401).send({ message: "No user found for this username!" });
    }

    // password
    const hashedPassword = CryptoJs.AES.decrypt(user.password, "SECRET");
    const Originalpassword = hashedPassword.toString(CryptoJs.enc.Utf8);
    const inputPassword = req.body.password;
    if (Originalpassword != inputPassword) {
      res.status(401).send({ message: "Wrong password entered!" });
    }
    // JWT token
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.SECRET,
      { expiresIn: "3d" }
    );

    // Separate Password from user
    const { password, ...others } = user._doc;

    res.status(200).send({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
