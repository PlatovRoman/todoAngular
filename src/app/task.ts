
export class Task {
  taskId?: number;
  tasksName: string;
  taskPriority: string;
  taskIsOk: boolean;
  taskTimeCreate?: string;
  taskTimeConfirm?: string;
  taskTimeCancel?: string;
  //tslint:disable
  constructor(tasksName: string, taskPriority: string, taskIsOk: boolean, taskTimeCreate?: string, taskTimeConfirm?: string, taskTimeCancel?: string, taskId?: number) {
    this.taskId = taskId;
    this.tasksName = tasksName;
    this.taskPriority = taskPriority;
    this.taskIsOk = taskIsOk;
    this.taskTimeCreate = taskTimeCreate;
    this.taskTimeConfirm = taskTimeConfirm;
    this.taskTimeCancel = taskTimeCancel;
  }
}
