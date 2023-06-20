import { ITask } from "../../model/task.model";

export const storeTag: string = '[Task Manager Store]';

export interface TaskManagerStore
{
    loading: boolean;
    listTask: Array<ITask>;
    editTask: ITask;
}