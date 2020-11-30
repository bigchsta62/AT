
import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'



// the is going to grab all of the students
// this will be the GET to /api/products
// this is access for a public routes
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
})
// the is going to grab single student
//  GET to /api/products/:id
// this is access for a public routes
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {

        res.json(product)

    } else {
        res.status(404)
        throw new Error('Product Not Found')
    }
})

export { getProducts, getProductById }