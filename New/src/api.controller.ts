import { Controller, Get, Param } from '@nestjs/common';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Get('delay/:delaySecond')
  fetchData(
    @Param('delaySecond') delaySecond: bigint,
  ): Observable<AxiosResponse<any>> {
    return this.apiService.fetchExternalApiDataWithDelaySecond(delaySecond);
  }
}
