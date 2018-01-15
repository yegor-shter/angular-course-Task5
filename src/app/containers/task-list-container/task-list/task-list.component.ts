import { Component, OnInit } from '@angular/core';
import { ITodo } from './../../../task-view-container/interfaces/ITodo.interface';
import { TodoItemsService } from './../../../task-view-container/services/todo-items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public todos: ITodo[];
  public tagsForSearh = [];

  constructor(
    private todoItemsService: TodoItemsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.todoItemsService.getTodos().then((todos) => {
      this.todos = todos;
    });
  }
  viewTodo(id: number) {
    this.router.navigate(['/edit/', id]);
  }

  newTodo() {
    this.router.navigate(['/newtask/', 'new']);
  }
  tagSearch(array: any) {
    this.tagsForSearh = array;
  }

  filterByTags() {
   this.todoItemsService.searchTodosByTags(this.tagsForSearh).then((todos) =>
  this.todos = todos);
   console.log(this.todos);
  }
}
