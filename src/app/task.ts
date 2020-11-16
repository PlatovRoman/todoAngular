
export class Task {
  taskId?: number;
  tasksName: string;
  taskPriority: string;
  taskIsOk: boolean;
  taskTimeCreate?: Date;
  taskTimeConfirm?: Date;
  taskTimeCancel?: Date;
  //tslint:disable
  constructor(tasksName: string, taskPriority: string, taskIsOk: boolean, taskTimeCreate?: Date, taskTimeConfirm?: Date, taskTimeCancel?: Date, taskId?: number) {
    this.taskId = taskId;
    this.tasksName = tasksName;
    this.taskPriority = taskPriority;
    this.taskIsOk = taskIsOk;
    this.taskTimeCreate = taskTimeCreate;
    this.taskTimeConfirm = taskTimeConfirm;
    this.taskTimeCancel = taskTimeCancel;
  }
}
