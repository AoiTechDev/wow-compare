import { Controller, Post } from '@nestjs/common';
import { AuthService } from './app.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';

@Controller()
export class AppController {
  constructor(private readonly appService: AuthService) {}

  @Post()
  getHello(): Observable<any> {
    return this.appService
      .getAccessToken()
      .pipe(map((response: AxiosResponse) => response.data));
  }
}
