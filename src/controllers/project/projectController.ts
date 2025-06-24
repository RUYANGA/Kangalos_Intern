import {Request,Response} from 'express'
import { prisma } from '../../prisma/prisma';
import { PROJECTSTATUS } from '@prisma/client';


export async function getAllProjects(req:Request,res:Response):Promise<any>{
  try {
    const projects = await prisma.project.findMany({
      include: {
        teamMembers: true,
        tags: true,
        fields: true,
        sponsors: true,
      },
    });

    return res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

// create a new project
export async function createProject(req:Request,res:Response):Promise<any>{
  try {
    const {
      title,
      description,
      initiatedFrom,
      beneficialist,
      userId,
      tagIds = [],
      fieldIds = [],
      sponsorIds = [],
    } = req.body;

    const project = await prisma.project.create({
      data: {
        title,
        description,
        initiatedFrom,
        beneficialist,
        status: 'NOT_SUBMITTED',
        teamMembers: {
          create: {
            userId,
            roleTeam: 'TEAM_LEADER',
          },
        },
        tags: {
          create: tagIds.map((tagId: string) => ({
            tag: { connect: { id: tagId } },
          })),
        },
        fields: {
          create: fieldIds.map((fieldId: string) => ({
            field: { connect: { id: fieldId } },
          })),
        },
        sponsors: {
          create: sponsorIds.map((sponsorId: string) => ({
            sponsor: { connect: { id: sponsorId } },
          })),
        },
      },
      include: {
        teamMembers: true,
        tags: true,
        fields: true,
        sponsors: true,
      },
    });

    return res.status(201).json(project);
  } catch (error) {
    console.error('Error creating project:', error);
    return res.status(500).json({ error: 'Failed to create project' });
  }
};

// get a project by id
export async function getProjectById(req:Request,res:Response):Promise<any>{
  const { id } = req.params;

  try {
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        teamMembers: true,
        tags: true,
        fields: true,
        sponsors: true,
      },
    });

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    return res.status(200).json(project);
  } catch (error) {
    console.error('Error fetching project:', error);
    return res.status(500).json({ error: 'Failed to fetch project' });
  }
}

// get all projects by user id
export async function getProjectsByUserId(req: Request, res: Response): Promise<any> {
  const { userId } = req.params;

  try {
    const projects = await prisma.project.findMany({
      where: {
        teamMembers: {
          some: {
            userId,
          },
        },
      },
      include: {
        teamMembers: true,
        tags: true,
        fields: true,
        sponsors: true,
      },
    });

    return res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects by user ID:', error);
    return res.status(500).json({ error: 'Failed to fetch projects' });
  }
}
