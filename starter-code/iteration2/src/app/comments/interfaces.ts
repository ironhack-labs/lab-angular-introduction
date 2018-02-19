export interface commentInterface{
  name:string;
  description:string;
  updatedAt: Date;
}

export interface commentListInterface{
  task: Array<commentInterface>;
  addTask(comment:commentInterface):void;
}