import express from 'express';
import { registerUser, loginUser, getUsers, getUserByUsername } from '../controllers/UserController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Rute untuk mendapatkan semua pengguna
router.get('/', getUsers);
router.get('/:username', getUserByUsername);

export default router;
