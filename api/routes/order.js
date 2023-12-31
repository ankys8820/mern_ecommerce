const Order = require("../models/Order");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} = require("./verifyToken");
const router = require("express").Router();

// Craete a Order
router.post("/create", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).send(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Update Order
router.put("/update/:id/", verifyTokenAndAdmin, async (req, res) => {
  try {
    const updateOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // // Delete a Cart
router.delete("/delete/:id/", verifyTokenAndAdmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

// // // Get a User Orders
// In bellow we need to put user id for accessing the Orders
router.get("/single/:id/", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const orders = await Order.find(req.params.id);
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // // Get all the Orders
router.get("/all", verifyTokenAndAdmin, async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

//  Get Monthly Income
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
// try {
// } catch (err) {}
