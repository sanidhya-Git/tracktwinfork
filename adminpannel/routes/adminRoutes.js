const express = require('express');
const { registerAdmin, loginAdmin } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/protected', authMiddleware, (req, res) => res.json({ msg: 'Protected route accessed!' }));

module.exports = router;
