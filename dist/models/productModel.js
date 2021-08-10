"use strict";
const utils_1 = require("../utils");
let products;
try {
    products = require('../../database/product.json');
}
catch (err) {
    console.log('NO DataBase at the moment, Make a post to create one');
}
function findAll() {
    return new Promise((resolve, reject) => {
        try {
            resolve(products);
        }
        catch (err) {
            reject(err);
        }
    });
}
function findById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === id);
        resolve(product);
    });
}
function create(product) {
    return new Promise((resolve, reject) => {
        if (!products) {
            products = [];
        }
        const newProduct = { id: uniid(), ...product };
        products.push(newProduct);
        // console.log(path.resolve('.', './databaseFolder/product.json'))
        utils_1.writeDataToFile('./database/product.json', products);
        resolve(newProduct);
    });
}
function update(id, product) {
    return new Promise((resolve, reject) => {
        const index = products.findIndex((p) => p.id === id);
        products[index] = { id, ...product };
        utils_1.writeDataToFile('./database/product.json', products);
        resolve(products[index]);
    });
}
function remove(id) {
    return new Promise((resolve, reject) => {
        products = products.filter((p) => p.id !== id);
        utils_1.writeDataToFile('./database/product.json', products);
        resolve(null);
    });
}
// function removeAll(){
//  return new Promise((resolve, reject) => {
//   products.splice(0)
//   writeDataToFile('./database/product.json', products)
//   resolve(null)
//  })
// }
function uniid() {
    if (products.length === 0) {
        return 1;
    }
    else {
        return Number(products[products.length - 1].id) + 1;
    }
}
module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
    //removeAll
};
