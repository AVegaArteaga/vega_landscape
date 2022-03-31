import express from 'express';

import { getAddressPosts, createAddressPosts } from '../controllers/addresses.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getAddressPosts);
router.post('/', auth, createAddressPosts);

export default router;