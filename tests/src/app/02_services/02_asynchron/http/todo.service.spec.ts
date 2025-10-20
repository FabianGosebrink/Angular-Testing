import { TestBed, waitForAsync } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { MockProvider } from 'ng-mocks';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('TodoService', () => {
  let service: TodoService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockProvider(HttpClient)],
    });

    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(TodoService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loadTodos', () => {
    test('should load todos', waitForAsync(() => {
      // arrange
      const response = [
        {
          id: '1',
          value: 'Foo',
        },
      ];
      const getSpy = jest
        .spyOn(httpClient, 'get')
        .mockReturnValue(of(response));

      // act
      const result$ = service.loadTodos();

      // assert
      result$.subscribe((result) => {
        expect(result).toEqual(response);
        expect(getSpy).toHaveBeenCalled();
      });
    }));
  });
});
