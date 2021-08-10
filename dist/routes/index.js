"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const productcontroller_1 = __importDefault(require("../controllers/productcontroller"));
// import usersRoutes from "./users"
/* GET home page. */
router.get('/', productcontroller_1.default.getProducts);
// router.get('/', function (req, res, next) {
//  res.status(200).json({
//   status: 'success!',
//   msg: "Comrade kayode, implement getall here"
//   })
// });
router.get('/:id', productcontroller_1.default.getProduct);
// router.get('/:id', function (req, res, next) {
//  const id = req.params.id; //this is a string.
//  res.status(200).json({
//   status: 'success!',
//   msg: "Comrade implement your get by id here"
//   })
// });
router.post('/', productcontroller_1.default.createProduct);
// router.post('/', function (req, res, next) {
//  res.status(200).json({
//   status: 'success!',
//   msg: "Comrade implement your create( POST) here"
//   })
// });
router.put('/:id', productcontroller_1.default.updateProduct);
// router.put('/:id', function (req, res, next) {
//  const id = req.params.id; //this is a string.
//  res.status(200).json({
//   status: 'success!',
//   msg: "Comrade implement your update here."
//   })
// });
router.delete('/:id', productcontroller_1.default.deleteProduct);
// router.delete('/:id', function (req, res, next) {
//  const id = req.params.id; //this is a string.
//  res.status(200).json({
//   status: 'success!',
//   msg: "Comrade impement your delete here."
//   })
// });
//router.delete('/', controller.deleteProducts)
exports.default = router;
