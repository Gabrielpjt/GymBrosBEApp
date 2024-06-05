import express from "express";
import {
  TampilReport,
} from "../controllers/ReportController.js";

const router = express.Router();

// Rute untuk menampilkan semua laporan
router.get("/reports", TampilReport);

export default router;