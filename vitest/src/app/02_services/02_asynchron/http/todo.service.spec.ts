import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, of } from 'rxjs';
import { provideMock } from '../../../testing/auto-mock';

describe('TodoService', () => {
  let service: TodoService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMock(HttpClient)],
    });

    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(TodoService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loadTodos', () => {
    test('should load todos', async () => {
      // arrange
      const response = [
        {
          id: '1',
          value: 'Foo',
        },
      ];
      const getSpy = vi.spyOn(httpClient, 'get').mockReturnValue(of(response));

      // act
      const result = await lastValueFrom(service.loadTodos());

      // assert
      expect(result).toEqual(response);
      expect(getSpy).toHaveBeenCalled();
    });
  });
});
