const Product = require("../model/prodSchema.js")



const getAllData = async (req, res) => {
    try {
        const product = await Product.find()
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({
            succes: false,
            message: "Server is not work"
        })
    }
}

const deleteById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findOneAndDelete({ _id: id })
        res.status(200).json(product)
    } catch (err) {
        res.status(404).json({
            succes: false,
            message: "Product is not found"
        })
    }
}

const getDataById = async (req, res) => {
    const { id } = req.params
    try {
        const data = await Product.find({ _id: id })
        res.status(200).json(data)
    } catch (err) {
        res.status(404).json({
            succes: false,
            message: "Product is not found"
        })
    }
}

const postData = async (req, res) => {
    try {
        const newProduct = new Product(req.body)
        await newProduct.save()
        res.status(201).json({
            succes: true,
            message: "Posted"
        })
    } catch {
        res.status(500).json({
            succes: false,
            message: "Server is not work"

        })
    }
}
const putDataById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findOneAndReplace({ _id: id }, req.body)
        res.status(200).json(product)
    } catch (err) {
        res.status(404).json({
            succes: false,
            message: "Product is not found"
        })
    }
}
const patchDataById = async (req, res) => {
    const { id } = req.params
    try {
        const product = await Product.findOneAndUpdate({ _id: id }, req.body)
        res.status(200).json(product)
    } catch (err) {
        res.status(404).json({
            succes: false,
            message: "Product is not found"
        })
    }
}

module.exports = { getAllData, getDataById, postData, deleteById, putDataById, patchDataById }