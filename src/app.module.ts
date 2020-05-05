import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/entities/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'taskdb',
      synchronize: false,
      migrationsRun: true,
      migrationsTableName: 'migrations',
      migrations: ['src/migration/*.ts'],
      cli: {
        migrationsDir: 'src/migration',
      },
      entities: [
        // __dirname + '/../**/*.entity.ts'
        Task,
      ],
      logging: ['error', 'schema', 'warn'],
    }),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
