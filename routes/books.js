var express = require('express');
var router = express.Router();
var BookController = require('../controllers/BooksController');
var bc = new BookController();

router.get("/", bc.findAll.bind(bc));
router.get("/:name", bc.findbyName.bind(bc));
router.post("/", bc.create.bind(bc));
router.put("/", bc.update.bind(bc));
router.delete("/:name", bc.delete.bind(bc));
router.search("/", bc.search.bind(bc));


module.exports=router;