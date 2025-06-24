import { Router } from 'express';
import { createProject } from '../../controllers/project/projectController'; 
import {
  getAllProjects,
  getProjectById,
  getProjectsByUserId,
} from '../../controllers/project/projectController';
import { prisma } from '../../prisma/prisma';




const router = Router();

router.post('/new', createProject);
router.get('/all', getAllProjects);
router.get('/get/:id', getProjectById);
router.get('/get/by/user/:userId', getProjectsByUserId);



// 👹 this is a temporary API to get users
router.get('/all-users', async (_req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        email: true
      }
    });
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});


export default router;
