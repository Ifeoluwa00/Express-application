"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const productModel_1 = __importDefault(require("../models/productModel"));
//@desc Get All Product
//@route Get /api/products
async function getProducts(req, res) {
    const products = await productModel_1.default.findAll();
    if (!products) {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "DataBase Not Found make a post" }));
    }
    else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(products));
    }
}
//@desc Get single Product
//@route Get /api/product/:id
async function getProduct(req, res) {
    try {
        const product = await productModel_1.default.findById(+req.params.id);
        if (!product) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Product Not Found" }));
        }
        else {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(product));
        }
    }
    catch (error) {
        console.log(error);
    }
}
//@desc Create a Product
//@route POST /api/products
async function createProduct(req, res) {
    try {
        const { organization, products, marketValue, address, ceo, country, noOfEmployees, employees } = req.body;
        const product = {
            organization,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            products,
            marketValue,
            address,
            ceo,
            country,
            noOfEmployees,
            employees
        };
        const newProduct = await productModel_1.default.create(product);
        res.writeHead(201, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(newProduct));
    }
    catch (error) {
        console.log(error);
    }
}
//@desc Update a Product
//@route PUT /api/products/:id
async function updateProduct(req, res) {
    try {
        const product = await productModel_1.default.findById(+req.params.id);
        if (!product) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Product Not Found" }));
        }
        else {
            const { organization, products, marketValue, address, ceo, country, noOfEmployees, employees } = req.body;
            const productData = {
                organization: organization || product.organization,
                createdAt: product.createdAt,
                updatedAt: new Date().toISOString(),
                products: products || product.products,
                marketValue: marketValue || product.marketValue,
                address: address || product.address,
                ceo: ceo || product.ceo,
                country: country || product.country,
                noOfEmployees: noOfEmployees || product.noOfEmployees,
                employees: employees || product.employees
            };
            const updProduct = await productModel_1.default.update(+req.params.id, productData);
            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify(updProduct));
        }
    }
    catch (error) {
        console.log(error);
    }
}
//@desc Delete Product
//@route DELETE /api/product/:id
async function deleteProduct(req, res) {
    try {
        const product = await productModel_1.default.findById(+req.params.id);
        if (!product) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: "Product Not Found" }));
        }
        else {
            await productModel_1.default.remove(+req.params.id);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: `Product ${+req.params.id} removed` }));
        }
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
    //deleteProducts
};
