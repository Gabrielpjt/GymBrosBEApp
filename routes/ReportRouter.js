import express from 'express';
import { TambahData, TampilReport, ListReportbyUsername } from '../controllers/ReportController.js';

const router = express.Router();

// Rute untuk menambahkan data laporan baru
router.post('/report', TambahData);

// Rute untuk menampilkan semua laporan
router.get('/reports', TampilReport);

// Rute untuk menampilkan daftar laporan berdasarkan username
router.get('/reports/:username', ListReportbyUsername);

export default router;
