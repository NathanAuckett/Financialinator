import express from 'express';

import controller from "../controllers/controller.js";

const router = express.Router();

router.get("/", (req, res) => {
    controller.data(req, res);
});

router.get("/files", (req, res) => {
    controller.files(req, res);
});

export default router;