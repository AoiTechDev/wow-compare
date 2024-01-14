import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      isGlobal: true, // Makes the ConfigModule available throughout the application
    }),
  ],
  controllers: [AppController],
  providers: [AuthService],
})
export class AppModule {}
