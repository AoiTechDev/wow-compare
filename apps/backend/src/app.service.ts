import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosRequestConfig } from 'axios';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  async getAccessToken(
    clientId: string,
    clientSecret: string,
  ): Promise<string> {
    const tokenUrl = 'https://oauth.battle.net/token';
    const body = new URLSearchParams({
      grant_type: 'client_credentials',
    }).toString();

    const config: AxiosRequestConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      auth: {
        username: clientId,
        password: clientSecret,
      },
    };

    try {
      const response = await this.httpService
        .post(tokenUrl, body, config)
        .toPromise();
      return response.data.access_token;
    } catch (error) {
      // Handle error
      console.error(error);
      throw error;
    }
  }
}