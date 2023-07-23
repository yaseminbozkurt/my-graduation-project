// orderController.js

const Order = require('../models/orderModel');

exports.getAllOrders = async (req, res) => {
          try {
                    const orders = await Order.find();
                    res.render('/views/Admin/orders.html', { orders });
          } catch (err) {
                    console.error(err);
                    res.status(500).send('Internal Server Error');
          }
};

exports.getOrderDetails = async (req, res) => {
          try {
                    const order = await Order.findById(req.params.id);
                    res.render('/views/Admin/order-details.html', { order });
          } catch (err) {
                    console.error(err);
                    res.status(500).send('Internal Server Error')
          }
};
