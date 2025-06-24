import { Router } from 'express';
import {
  createProject,
  getAllProjects,
  getProjectById,
  getProjectsByUserId,
  getProjectsByStatus,
} from '../../controllers/project/projectController';

import { prisma } from '../../prisma/prisma';
import { zodValidate } from '../../middlewares/Auth/zodValidaate';
import { AuthorizeRoles } from '../../middlewares/Auth/TokenVerify';

import {
  CreateProjectSchema,
  GetProjectByIdSchema,
  GetProjectsByUserIdSchema,
  GetProjectsByStatusSchema,
} from '../../middlewares/zod/project';

const router = Router();

// CREATE project — with zod + auth
router.post(
  '/new',
  AuthorizeRoles(['STUDENT', 'MENTOR']),
  zodValidate(CreateProjectSchema),
  createProject
);

// GET all projects — auth only (optional zod, since no input needed)
router.get(
  '/all',
  AuthorizeRoles(['STUDENT', 'MENTOR', 'ADMIN']),
  getAllProjects
);

// GET project by id — validate :id
router.get(
  '/get/:id',
  AuthorizeRoles(['STUDENT', 'MENTOR']),
  zodValidate(GetProjectByIdSchema),
  getProjectById
);

//GET projects by user ID
router.get(
  '/get/by/user/:userId',
  AuthorizeRoles(['STUDENT', 'MENTOR']),
  zodValidate(GetProjectsByUserIdSchema),
  getProjectsByUserId
);

//GET projects by status (PROJECTSTATUS)
router.get(
  '/get/by/status/:status',
  AuthorizeRoles(['STUDENT', 'MENTOR', 'ADMIN']),
  zodValidate(GetProjectsByStatusSchema),
  getProjectsByStatus
);

// 👹 DEV ONLY — temporary route to list all users
router.get('/all-users', async (_req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        firstName: true,
        email: true,
      },
    });
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

export default router;
