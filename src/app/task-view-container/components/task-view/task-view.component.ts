import { Component, OnInit, ViewChild, Inject} from '@angular/core';
import { TodoItemsService } from './../../services/todo-items.service';
import { SliderComponent } from './../slider/slider.component';
import { ITodo } from './../../interfaces/ITodo.interface';
import { TagsService } from './../../services/tags.service';
import { statusCodeToken } from './../../tokens/app-tokens';
import { Router, ActivatedRoute }  from '@angular/router';
import { TodoItemService } from './../../services/todo-item.service';
import { ConfirmGuardService }  from './../../services/confirm-guard.service';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';


@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css'],

})
export class TaskViewComponent implements ConfirmGuardService {

  public todos: ITodo[] ;
  public openedTodoId: number =null ;
  public urlId = this.activateRoute.snapshot.paramMap.get('todoId');
  public saved = false;



  @ViewChild('slider', {read: SliderComponent})
  private slider: SliderComponent;

  @ViewChild('edit', {read: TodoEditComponent})
  private edit: TodoEditComponent;

  constructor(
    private todoItemsService: TodoItemsService,
    private tagService: TagsService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private todoItemService: TodoItemService,

    @Inject(statusCodeToken) private statusCodesToken: any
  ) { }

  ngOnInit() {
    this.checkId();
    this.todoItemsService.getTodos().then((todos) => {
      this.todos = todos;
    })



  }

  canDeactivate () {
    if(this.saved==false) {

                return confirm("The data is unsaved, do you want to procceed?");
              } else {
                this.saved = false;
                return true;
              }
  }


  openEditTodo (id: number){
    if(this.saved ==true) {
      this.openedTodoId =id;

    } else { }

   }

   onSaved () {

     this.saved=true;

   }

   checkId () {
     if(this.urlId === 'new') {
       const  todo = this.todoItemService.addItem();
       this.openedTodoId = todo.id;
     } else {
       this.openedTodoId = +this.urlId;
     }
   }

  updateList() {
    this.todoItemsService.getTodos()
    .then((todos) => {
      this.todos =todos;
    })
    console.log('list updated');
    this.openedTodoId = null;
  }

  moveLeft() {
    this.slider.scrollLeft();
  }

  moveRight() {
    this.slider.scrollRight();
  }


}
