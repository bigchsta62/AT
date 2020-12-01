
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

export {
    addOrderItems
}