import { inject, TestBed } from '@angular/core/testing';
import { BasicService } from './basic.service';

describe('BasicService', () => {
  describe('Injecting in every single Test', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [BasicService],
      });
    });

    it('should be created', inject([BasicService], (service: BasicService) => {
      expect(service).toBeTruthy();
    }));
  });

  describe('Injecting in a seperate foreach (Suite)', () => {
    let service: BasicService;

    beforeEach(() =>
      TestBed.configureTestingModule({
        providers: [BasicService],
      })
    );

    beforeEach(inject([BasicService], (s: BasicService) => {
      service = s;
    }));

    it('should have a service instance', () => {
      expect(service).toBeDefined();
    });
  });

  describe('Injecting via TestBed.get()', () => {
    let service: BasicService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [BasicService],
      });

      service = TestBed.inject(BasicService);
    });

    it('should have a service instance', () => {
      expect(service).toBeDefined();
    });
  });

  describe('Testing service functions', () => {
    let service: BasicService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [BasicService],
      });

      service = TestBed.inject(BasicService);
    });

    it('should add properly: injection method 1', () => {
      expect(service.add(2, 3)).toBe(5);
    });

    it('should add properly: (Spy)', () => {
      spyOn(service, 'add').and.returnValue(6);
      expect(service.add(2, 3)).toBe(6);
    });
  });
});
