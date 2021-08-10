import express from  'express';
const router = express.Router();
import controller from '../controllers/productcontroller';
// import usersRoutes from "./users"
/* GET home page. */

router.get('/', controller.getProducts);

// router.get('/', function (req, res, next) {
//  res.status(200).json({
//   status: 'success!',
//   msg: "Comrade kayode, implement getall here"
//   })
// });

router.get('/:id', controller.getProduct);

// router.get('/:id', function (req, res, next) {
//  const id = req.params.id; //this is a string.
//  res.status(200).json({
//   status: 'success!',
//   msg: "Comrade implement your get by id here"
//   })
// });

router.post('/', controller.createProduct)


// router.post('/', function (req, res, next) {

//  res.status(200).json({
//   status: 'success!',
//   msg: "Comrade implement your create( POST) here"
//   })
// });

router.put('/:id', controller.updateProduct)


// router.put('/:id', function (req, res, next) {
//  const id = req.params.id; //this is a string.
//  res.status(200).json({
//   status: 'success!',
//   msg: "Comrade implement your update here."
//   })
// });


router.delete('/:id', controller.deleteProduct)

// router.delete('/:id', function (req, res, next) {
//  const id = req.params.id; //this is a string.
//  res.status(200).json({
//   status: 'success!',
//   msg: "Comrade impement your delete here."
//   })
// });

//router.delete('/', controller.deleteProducts)

export default router
