export interface Task {
  taskId?: number;
  taskName: string;
  taskPriority: string;
  taskIsOk: boolean;
  taskVisible: boolean;
  taskTimeCreate?: Date;
  taskTimeConfirm?: Date;
  taskTimeCancel?: Date;
}
