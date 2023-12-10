const Cart = require("../models/Cart");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken");
const router = require("express").Router();

// Craete a Cart
router.post("/create", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).send(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Update Cart
router.put("/update/:id/", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Delete a Cart
router.delete("/delete/:id/", verifyTokenAndAuthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Get a User Cart
// In bellow we need to put user id for accessing the Cart
router.get("/single/:id/", async (req, res) => {
  try {
    const cart = await Cart.findOne(req.params.id);
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // Get all the Cart
router.get("/all", verifyTokenAndAdmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
});

//  Get Products Stats

module.exports = router;
// try {
// } catch (err) {}
