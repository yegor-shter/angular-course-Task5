import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocopleteTagComponent } from './autocoplete-tag.component';

describe('AutocopleteTagComponent', () => {
  let component: AutocopleteTagComponent;
  let fixture: ComponentFixture<AutocopleteTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocopleteTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocopleteTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
