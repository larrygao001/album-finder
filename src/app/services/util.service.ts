import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(private logger: LoggerService) { }

  add(n1:number, n2:number){
    this.logger.log("Hello");
    return n1 + n2;
  }

}
