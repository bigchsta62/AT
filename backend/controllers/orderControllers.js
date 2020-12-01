
import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'



// the is going to create a new order made
// this will be the Post to /api/orders
// this is access for a protected routes
const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
        return

    } else {
        const order = new Order({
            orderItems, user: req.user._id, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice

        })

        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }
})
// the is going to get the new order made by id.
// this will be the get to /api/orders/:id
// this is access for a private routes
const getOrderById = asyncHandler(async (req, res) => {
    const order = await (await Order.findById(req.params.id)).populate('user', 'name email')

    if (order) {
        res.json(order)
    } else {
        res.status(404)
        throw new Error('Order not found')
    }

})

export {
    addOrderItems,
    getOrderById
}