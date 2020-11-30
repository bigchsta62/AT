import express from 'express'
import { getProductById, getProducts } from '../controllers/productControllers.js'
// import asyncHandler from 'express-async-handler'
// import Product from '../models/productModel.js'

const router = express.Router()


// the is going to grab all of the students
// this will be the GET to /api/products
// this is access for a public routes


router.route('/').get(getProducts)
// the is going to grab single student
//  GET to /api/products/:id
// this is access for a public routes


router.route('/:id').get(getProductById)





export default router