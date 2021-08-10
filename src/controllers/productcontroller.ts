import Product from "../models/productModel"
import { IncomingMessage, ServerResponse } from "http";
import { getPostData, UserObj } from "../utils"
import { Request, Response } from 'express';
//@desc Get All Product
//@route Get /api/products
async function getProducts(req: Request, res:Response) {

  const products = await Product.findAll()
  if (!products) {
    res.writeHead(404, { "Content-Type": "application/json" })
    res.end(JSON.stringify({message: "DataBase Not Found make a post"})) 
  } else {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(products)) 
  }
}

//@desc Get single Product
//@route Get /api/product/:id
async function getProduct(req: Request, res:Response) {
  try {
    const product = await Product.findById(+req.params.id)
    
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" })
     res.end(JSON.stringify({message: "Product Not Found"})) 
    } else {
      res.writeHead(200, { "Content-Type": "application/json" })
     res.end(JSON.stringify(product)) 
    }
   
  } catch (error) {
   console.log(error)
  }
}
 
//@desc Create a Product
//@route POST /api/products
async function createProduct(req: Request, res:Response) {
  try {
    
    const { organization, products, marketValue, address, ceo, country, noOfEmployees, employees } = req.body;
    const product: UserObj  = {
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
    }
    const newProduct = await Product.create(product)
  res.writeHead(201, { "Content-Type": "application/json" })
  return res.end(JSON.stringify(newProduct))
    

  } catch (error) {
   console.log(error)
  }
 }

//@desc Update a Product
//@route PUT /api/products/:id
async function updateProduct(req: Request, res:Response) {
  try {
    const product = await Product.findById(+req.params.id)
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" })
      res.end(JSON.stringify({ message: "Product Not Found" }))
    } else {
      const { organization, products, marketValue, address, ceo, country, noOfEmployees, employees } = req.body
      const productData: UserObj = {
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
      }
      const updProduct = await Product.update(+req.params.id, productData)
      res.writeHead(200, { "Content-Type": "application/json" })
      return res.end(JSON.stringify(updProduct))
    }
  } catch (error) {
   console.log(error)
  }
 }

//@desc Delete Product
//@route DELETE /api/product/:id
async function deleteProduct(req: Request, res:Response) {
  try {
    const product = await Product.findById(+req.params.id)
    
    if (!product) {
      res.writeHead(404, { "Content-Type": "application/json" })
     res.end(JSON.stringify({message: "Product Not Found"})) 
    } else {
      await Product.remove(+req.params.id)
      res.writeHead(200, { "Content-Type": "application/json" })
     res.end(JSON.stringify({message: `Product ${+req.params.id} removed`})) 
    }
   
  } catch (error) {
   console.log(error)
  }
}

//@desc Delete All Products
//@route DELETE /api/products
// async function deleteProducts(req: Request, res:Response) {
//   try {
//     const product = await Product.findAll
    
//     if (!product) {
//       res.writeHead(404, { "Content-Type": "application/json" })
//      res.end(JSON.stringify({message: "Product Not Found"})) 
//     } else {
//       await Product.removeAll()
//       res.writeHead(200, { "Content-Type": "application/json" })
//      res.end(JSON.stringify({message: " All Products removed"})) 
//     }
   
//   } catch (error) {
//    console.log(error)
//   }
// }

export = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
  //deleteProducts
   
}