import { TestBed, inject, async } from '@angular/core/testing';

import { TodoItemsService } from './todo-items.service';
import { ITodo } from '../interfaces/ITodo.interface';

describe('TodoItemsService', () => {
  const todos = [
    {
      id: 101,
      tags: ['C#', 'JavaScript', 'Java'],
    },
    {
      tags: ['C#', 'Java'],
    },
    {
      tags: ['C#'],
    },
    {
      tags: [],
    },
    {
      tags: null,
    },
    {
      tags: undefined,
    }
  ];

  beforeEach(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
    TestBed.configureTestingModule({
      providers: [TodoItemsService]
    });
  });

  it('should be created', inject([TodoItemsService], (service: TodoItemsService) => {
    expect(service).toBeTruthy();
  }));

  it('should return one todo', async(inject([TodoItemsService], (service: TodoItemsService) => {
    expect(service.searchTodosByTags(['C#', 'JavaScript']).then(value => {
      expect(value.length).toBe(1);
      expect(value[0].id).toBe(101);
    }));
  })));

  it('should return return three todos', async(inject([TodoItemsService], (service: TodoItemsService) => {
    expect(service.searchTodosByTags(['C#']).then(value => expect(value.length).toBe(3)));
  })));

  it('should return empty aray for the empty list of tags', async(inject([TodoItemsService], (service: TodoItemsService) => {
    expect(service.searchTodosByTags([]).then(value => expect(value.length).toBe(0)));
  })));

  it('should return emtpy array for null', async(inject([TodoItemsService], (service: TodoItemsService) => {
    expect(service.searchTodosByTags(null).then(value => expect(value.length).toBe(0)));
  })));

  it('should return emtpy array for undefined', async(inject([TodoItemsService], (service: TodoItemsService) => {
    expect(service.searchTodosByTags(undefined).then(value => expect(value.length).toBe(0)));
  })));
});
