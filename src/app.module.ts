import { Module } from '@nestjs/common';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { TaskModule } from './modules/task/task.module';


@Module({
  imports: [UsuarioModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
