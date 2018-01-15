import { Injectable } from '@angular/core';
import {ITodo} from './../interfaces/ITodo.interface';

@Injectable()
export class TodoItemService {


  constructor() { }

  getItem (id: number): Promise<ITodo> {

    const todos = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        return Promise.resolve(todos[i]);
      }
    }
    return Promise.reject('not found');
  }

  saveItem (item: ITodo) {
    const todos: ITodo[] = JSON.parse(localStorage.getItem('todos'));
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === item.id) {
        Object.assign(todos[i], item);
        break;
      }
    }
    console.log(item);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  addItem (): ITodo {

    const todos: ITodo[] = JSON.parse(localStorage.getItem('todos'));
    const item: ITodo = {id: todos.length + 1, status: null, tags: null, text: null, title: 'New Task ' };

    todos.push(item);

    localStorage.setItem('todos', JSON.stringify(todos));
    return item;


  }

}
