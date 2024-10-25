import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ApiService {
  constructor(private readonly httpService: HttpService) {}

  fetchExternalApiDataWithDelaySecond(delaySecond: bigint): Observable<any> {
    return this.httpService
      .get('https://postman-echo.com/delay/' + delaySecond)
      .pipe(map((response: AxiosResponse) => response.data));
  }
}
