const express = require("express");
const { updateNews, addNews, findAll, findById } = require("../controller/newsController");
const router= express.Router();

router.post('/add',addNews);
router.put('/update/:id',updateNews);
router.get('/all',findAll);
router.get('/details/:id',findById);
router.delete('/remove/:id')



module.exports=router