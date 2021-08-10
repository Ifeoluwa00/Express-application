import express,{Request, Response} from 'express'
const router = express.Router();

/* GET users listing. */
router.get(('/users'), (req, res, next)=> {
  res.send('respond with a resource');
});

module.exports = router;
