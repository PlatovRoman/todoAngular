export interface Task {
  id?: number;
  taskName: string;
  taskPriority: string;
  taskIsOk: boolean;
  taskVisible: boolean;
  taskTimeCreate?: Date;
  taskTimeConfirm?: Date;
  taskTimeCancel?: Date;
}
