import { Component, OnInit, forwardRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray, NG_VALUE_ACCESSOR,} from '@angular/forms';



@Component({
  selector: 'app-tags-control',
  templateUrl: './tags-control.component.html',
  styleUrls: ['./tags-control.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TagsControlComponent), multi: true }
  ]
})
export class TagsControlComponent implements OnInit {
  @Output()
  public onSubmit= new EventEmitter();


  public tagForm = new FormGroup({
    tagsArray: new FormArray([
      new FormControl('tag1')
    ])
  })



  constructor() { }

  ngOnInit() {
    this.tagForm.valueChanges.subscribe(x => console.log(x));
  }



  get tagsArray(): FormArray {
    return this.tagForm.get('tagsArray') as FormArray;
  }

  addTagField() {
    this.tagsArray.push(new FormControl());
  }

  deleteTagsField(index: number) {
    this.tagsArray.removeAt(index);
  }


  save() {
    this.onSubmit.emit(this.tagsArray.value);

  }


}
