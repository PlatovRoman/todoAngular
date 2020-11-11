/*interface ITask { //export (и без класса)
//taskId: number;
  tasksName: string;
  taskPriority: string;
  taskIsCopmplete: boolean;
//taskTimeCreate: Date = new Date();
//taskTimeConfirm: Date = null;
//taskTimeCancel: Date = null;
}

export class Task implements ITask{
//taskId: number;
  tasksName: string;
  taskPriority: string;
  taskIsCopmplete: boolean;
  //
  //
  //
}*/

export class Task {
  taskId?: number;
  tasksName: string;
  taskPriority: string;
  taskIsOk: boolean;
  taskTimeCreate?: Date;
  taskTimeConfirm?: Date;
  taskTimeCancel?: Date;

  constructor(tasksName: string, taskPriority: string, taskIsOk: boolean, taskId?: number, taskTimeCreate?: Date, taskTimeConfirm?: Date, taskTimeCancel?: Date) {
    /*this.taskId = taskId;*/
    this.tasksName = tasksName;
    this.taskPriority = taskPriority;
    this.taskIsOk = taskIsOk;
    this.taskTimeCreate = taskTimeCreate;
    this.taskTimeConfirm = taskTimeConfirm;
    this.taskTimeCancel = taskTimeCancel;
  }
}
