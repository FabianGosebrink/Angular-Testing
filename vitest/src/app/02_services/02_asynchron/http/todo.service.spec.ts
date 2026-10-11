import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});

    service = TestBed.inject(TodoService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });
});
