export interface Task {
  taskId?: number;
  tasksName: string;
  taskPriority: string;
  taskIsOk: boolean;
  taskTimeCreate?: Date;
  taskTimeConfirm?: Date;
  taskTimeCancel?: Date;
}
