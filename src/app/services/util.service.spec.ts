// import { TestBed } from '@angular/core/testing';

// import { UtilService } from './util.service';
// import { LoggerService } from './logger.service';

// describe('UtilService', () => {
//   beforeEach(
//       // () => TestBed.configureTestingModule({})
//       ()=>{
//         const logger = jasmine.createSpyObj('LoggerService',['log']);
//         // const loggerSpy = spyOn(logger, 'log')
//         // const utilService = new UtilService(new LoggerService());
//         const utilService = new UtilService(logger);
//       }
//     );

//   it('should be created', () => {
//     const service: UtilService = TestBed.get(UtilService);
//     expect(service).toBeTruthy();
//   });


//   it('should add two numbers', ()=>{
//     expect(this.logger.log).toHaveBeenCalledTimes(0);
//     const result = this.utilService.add(5, 4);
//     expect(this.logger.log).toHaveBeenCalledTimes(1);
//     expect(result).toBe(9);
//   });

// });
