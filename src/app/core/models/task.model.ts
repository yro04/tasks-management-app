export interface ITask {
    id: number;
    title: string;
    published: boolean;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
    editing?:boolean;
  }