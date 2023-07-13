import express from 'express';
import { createUser, getAdminUsers, getUserById, getUsers } from './user.controller';
const router = express.Router();

router.get('/', getUsers);
router.get('/admins', getAdminUsers); //static 5
router.get('/:id', getUserById);
router.post('/create-user', createUser);
export default router; 