import express from "express";
const router = express.Router();
//controller
import { registerController, loginController, productController } from "../controllers";

//validators
import { loginValidator,registerValidator } from "../validators/authValidator";
import {storeValidator} from "../validators/productValidator";

//auth routes
router.post('/register',registerValidator,registerController.register);
router.post('/login',loginValidator,loginController.login);

//product routes
router.post('/product',storeValidator,productController.store);
router.put('/product/:id',storeValidator,productController.update);
router.delete('/product/:id',productController.destroy);
router.get('/product/:id',productController.showOne);
router.get('/product',productController.show);

export default router;