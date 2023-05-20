import upload_multer from "../upload.js"

import express from "express"
import {upload, upload_ok} from "../controllers/controller.js"

const router = express.Router();

router.get("/", upload)
router.get("/upload", upload)
router.post("/upload_ok",  upload_multer.single('userFile'), upload_ok)

export default router;