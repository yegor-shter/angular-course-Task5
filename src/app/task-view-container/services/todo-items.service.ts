import { Injectable } from '@angular/core';
import { ITodo } from './../interfaces/ITodo.interface';

@Injectable()
export class TodoItemsService {

  constructor() { }

  getTodos (): Promise<ITodo[]> {
    const todos = JSON.parse(window.localStorage.getItem('todos'));
    return Promise.resolve(todos);
  }


  async searchTodosByTags(tags: string[]): Promise<ITodo[]> {
    if (!tags || tags.length === 0) {
      return [];
    }
    const todos = await this.getTodos();
    return todos
    .filter(todo => todo.tags)
    .filter(todo => tags.every(tag => todo.tags.indexOf(tag) !== -1));
  }

  arrayFilter(arrayToSearchIn: any[], arrayToBeFound: any[]): any {
    // return arrayToSearchIn.filter(item => {
    //   return item.tags.filter((tag) => arrayToBeFound.indexOf(tag) !== -1); }).length;

  }

}
