import { Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import { ITodo } from './../../interfaces/ITodo.interface';
import { TodoItemService } from './../../services/todo-item.service';
import { ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';
import { error } from 'selenium-webdriver';


@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
  providers: [TodoItemService]
})
export class TodoEditComponent implements OnInit, OnChanges {
  @Input()
  public todoId: number;
  public userForm = new FormGroup( {
    id: new FormControl(),
    title: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required]),
    status: new FormControl(''),
    tags: new FormArray([
      new FormControl('tag1'),
      new FormControl('tag2'),
      new FormControl('tag3')
    ])
  });

  @Output()

  public onSaveSuccess = new EventEmitter();


  constructor(
    private todoItemService: TodoItemService,
    private activateRoute: ActivatedRoute
  ) { }



  async ngOnInit() {
    const urlId = this.activateRoute.snapshot.paramMap.get('todoId');
    const todo =
      (urlId === 'new')
      ? this.todoItemService.addItem()
      : await this.todoItemService.getItem(+urlId);
    this.todoId = todo.id;
    this.userForm.patchValue(todo);

  }




  ngOnChanges (value: any) {
  this.todoItemService.getItem(this.todoId)
  .then((todo) => {
  this.userForm.patchValue(todo);
  });

}



  get tags(): FormArray {
    return this.userForm.get('tags') as FormArray;
  }

  addTagField() {
    this.tags.push(new FormControl('new tag'));
    console.log(this.userForm.value);
  }

  deleteTagField(index: number) {
    this.tags.removeAt(index);
  }


  save () {
    (this.todoId.toString() === 'new')
    ? this.todoItemService.addItem()
    : this.todoItemService.saveItem(this.userForm.value);

    this.onSaveSuccess.emit();

  }



}
