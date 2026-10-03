import { Body, Controller, DefaultValuePipe, Get, Post, Param, ParseIntPipe, ParseFloatPipe, Query, Req } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Cookies, Headers } from '../decorators';
import { DefaultApi } from '../api';
import { EngineTemperature, EngineTemperatureCreate, EngineTemperatureList,  } from '../models';

@Controller()
export class DefaultApiController {
  constructor(private readonly defaultApi: DefaultApi) {}

  @Post('/engine-temperatures')
  createEngineTemperature(@Body() engineTemperatureCreate: EngineTemperatureCreate, @Req() request: Request): EngineTemperature | Promise<EngineTemperature> | Observable<EngineTemperature> {
    return this.defaultApi.createEngineTemperature(engineTemperatureCreate, request);
  }

  @Get('/engine-temperatures/:engine-temperature-id')
  getEngineTemperature(@Param('engine-temperature-id') engineTemperatureId: number, @Req() request: Request): EngineTemperature | Promise<EngineTemperature> | Observable<EngineTemperature> {
    return this.defaultApi.getEngineTemperature(engineTemperatureId, request);
  }

  @Get('/engine-temperatures')
  listEngineTemperatures(@Req() request: Request): EngineTemperatureList | Promise<EngineTemperatureList> | Observable<EngineTemperatureList> {
    return this.defaultApi.listEngineTemperatures(request);
  }

} 