import {Component, OnInit} from '@angular/core';
import {DateTransService} from '../date-trans.service';
import {Task} from '../task';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-task-name',
  templateUrl: './edit-task-name.component.html',
  styleUrls: ['./edit-task-name.component.css']
})
export class EditTaskNameComponent implements OnInit {
  public task: Task;

  EditTask: FormGroup = new FormGroup({
    Priority: new FormControl(),
    Name: new FormControl(),
    Date: new FormControl(),
  });

  constructor(private dateTrans: DateTransService) {
  }
  ngOnInit(): void {
    this.dateTrans.clickTaskEdit.subscribe((task: Task) => {
      this.task = task;
      this.EditTask.setValue({
        Priority: this.task.taskPriority,
        Name: this.task.taskName,
        Date: this.task.taskTimeCreate,
      });
     // this.EditTask.get('Priority').patchValue(task.taskPriority);
     // alert(this.task.taskPriority);
    });
  }

  public onClickSaveEdit(): void {
    this.task.taskName = this.EditTask.get('Name').value;
    this.dateTrans.clickSave(this.task);
  }
}
