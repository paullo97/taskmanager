import { createAction, props } from '@ngrx/store';
import { storeTag } from './taskmanager.store';
import { ITask } from '../../model/task.model';

export const createTask = createAction(
    `${storeTag} Create Task`,
    props<{
        task: ITask;
    }>()
);

export const editTask = createAction(
    `${storeTag} Edit Task`,
    props<{
        task: ITask;
    }>()
);

export const deleteTask = createAction(
    `${storeTag} Delete Tasks`,
    props<{
        tasks: Array<ITask>;
    }>()
);

export const completeTasks = createAction(
    `${storeTag} Complete Tasks`,
    props<{
        tasks: Array<ITask>;
    }>()
);