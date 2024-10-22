import { inject, TestBed } from '@angular/core/testing';
import { BasicService } from './basic.service';

describe('BasicService', () => {
  describe('Injecting in every single Test', () => {
    test('should be created', inject(
      [BasicService],
      (service: BasicService) => {
        expect(service).toBeTruthy();
      },
    ));
  });

  describe('Injecting in a seperate foreach (Suite)', () => {
    let service: BasicService;

    beforeEach(inject([BasicService], (s: BasicService) => {
      service = s;
    }));

    test('should have a service instance', () => {
      expect(service).toBeDefined();
    });
  });

  describe('Injecting via TestBed.inject()', () => {
    let service: BasicService;

    beforeEach(() => {
      service = TestBed.inject(BasicService);
    });

    test('should have a service instance', () => {
      expect(service).toBeDefined();
    });
  });

  describe('Testing service functions', () => {
    let service: BasicService;

    beforeEach(() => {
      service = TestBed.inject(BasicService);
    });

    test('should add properly: injection method 1', () => {
      // arrange

      // act
      const result = service.add(2, 3);

      // assert
      expect(result).toBe(5);
    });

    test('should add properly: (Spy)', () => {
      // arrange
      jest.spyOn(service, 'add').mockReturnValue(6);

      // act
      const result = service.add(2, 3);

      // assert
      expect(result).toBe(6);
    });
  });
});
