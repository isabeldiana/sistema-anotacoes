import { Injectable } from '@nestjs/common';
import { TaskDTO } from './task.dto';
import { PrismaService } from 'src/database/PrimasService';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService){}
async create(data: TaskDTO){
  const newTask = await this.prisma.task.create({
    data,
  })
  return newTask;
}
 
}
