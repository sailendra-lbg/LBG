const express = require('express');
const userRouter = express();
const userController = require('../controllers/userController');
let UserController = new userController();

//Route Path
userRouter.get('/user',UserController.fetchAllUserData);
userRouter.post('/user',UserController.insertUserData);
userRouter.put('/user/:id',UserController.updateUserData);
userRouter.delete('/user/:id',UserController.deleteUserData);

module.exports = userRouter;