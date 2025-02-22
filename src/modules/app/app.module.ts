import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TypeOrmConfig } from 'src/config/typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:join(process.cwd(),".env"),
      isGlobal:true
    }),
    TypeOrmModule.forRoot(TypeOrmConfig())
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
