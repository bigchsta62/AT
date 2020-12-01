import express from 'express'
import { addOrderItems, getOrderById } from '../controllers/orderControllers.js'
import { protect } from '../middleware/authMiddleware.js'
// import asyncHandler from 'express-async-handler'
// import Product from '../models/productModel.js'

const router = express.Router()


// the is going to grab all of the students
// this will be the GET to /api/products
// this is access for a public routes

router.route('/').post(protect, addOrderItems)
router.route('/:id').get(protect, getOrderById)



export default router