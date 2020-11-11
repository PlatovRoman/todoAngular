import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksINPComponent } from './tasks-inp.component';

describe('TasksINPComponent', () => {
  let component: TasksINPComponent;
  let fixture: ComponentFixture<TasksINPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksINPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksINPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
