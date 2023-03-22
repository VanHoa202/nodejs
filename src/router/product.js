import express from "express";
import {create , getAll , get, update, remove} from "../controller/product";

const router = express.Router();

router.post("/product", create);
router.get("/product", getAll);
router.get("/product", get);
router.put("/product", update);
router.delete("/product", remove);



export default router;