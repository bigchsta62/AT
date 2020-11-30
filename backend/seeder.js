import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from '../backend/data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

import connectDB from './config/db.js'


dotenv.config()

connectDB()

const importData = async () => {
    try {

        // whiping out the database
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        // passing the users.js here
        const createUser = await User.insertMany(users)


        const adminUser = createUser[0]._id

        const studentProducts = products.map(product => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(studentProducts)

        console.log('Students Inventoried for Sale')
        process.exit
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()


        console.log('Students Empty')
        process.exit
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}
// I found this on youtube, I hope this works. apperantly you can capert the node backend/seed -d to thru this process.""  this goes way back to the beginning of node training and understanding that node.argv.

if (process.argv[2] === '-d') {
    destroyData()
    // if no information that imput it.
} else {
    importData()
}

// i need to recognize this on the json some how.  import...?  