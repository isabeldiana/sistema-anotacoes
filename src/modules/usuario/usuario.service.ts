import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrimasService';
import { UsuarioDTO } from '../usuario.dto';
import * as bcrypt from 'bcrypt';
import { env } from 'process';

const hash = 'process.env'("PASS_HASH")
@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService){}
  async create(data: UsuarioDTO){
    const usuarioExist = await this.prisma.user.findFirst({
      where: {
        email: data.email,
      }
    })
    if(usuarioExist){
      throw new Error("Este email já esta sendo utilizado.")
    }

    const usuario = await this.prisma.user.create({
      data,
    })
    return usuario
  }


}
