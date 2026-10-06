import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { EngineTemperature, EngineTemperatureCreate, EngineTemperatureList,  } from '../models';


@Injectable()
export abstract class DefaultApi {

  abstract createEngineTemperature(engineTemperatureCreate: EngineTemperatureCreate,  request: Request): EngineTemperature | Promise<EngineTemperature> | Observable<EngineTemperature>;


  abstract getEngineTemperature(engineTemperatureId: number,  request: Request): EngineTemperature | Promise<EngineTemperature> | Observable<EngineTemperature>;


  abstract listEngineTemperatures( request: Request): EngineTemperatureList | Promise<EngineTemperatureList> | Observable<EngineTemperatureList>;

} 