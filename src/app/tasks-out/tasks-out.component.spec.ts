import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksOUTComponent } from './tasks-out.component';

describe('TasksOUTComponent', () => {
  let component: TasksOUTComponent;
  let fixture: ComponentFixture<TasksOUTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksOUTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksOUTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
