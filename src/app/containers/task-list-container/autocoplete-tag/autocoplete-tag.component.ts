import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-autocoplete-tag',
  templateUrl: './autocoplete-tag.component.html',
  styleUrls: ['./autocoplete-tag.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => AutocopleteTagComponent), multi: true }
  ]
})
export class AutocopleteTagComponent implements OnInit, ControlValueAccessor {

  public inputValue = '';

    public tags: string[] = [
      'in project',
      'to think',
      'to find out',
      'almost done',
      'badway done',
      'redo',
      'perfectly done'

    ];
    public hideOptions = true;

    public options: string[] = [];

    public propagateChange: (any) => void;

    public propagateTouched: (any) => void;

  constructor() { }

  ngOnInit() {
  }

  newTerm(term: string) {
    this.hideOptions = false;
    this.options.length = 0;
    for (let i = 0; i < this.tags.length; i++) {
     if (this.tags[i].indexOf(term) !== -1) {
       this.options.push(this.tags[i]);
     }
    }}

  select(opt) {
    this.hideOptions = true;
    this.inputValue = opt;
    this.propagateChange(this.inputValue);
  }

  writeValue(value) {
    this.inputValue = value;
    this.hideOptions = true;


  }

  registerOnChange(fn: any) {

    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.propagateTouched = fn;
  }

}

