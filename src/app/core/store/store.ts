import { Action, ActionReducerMap } from '@ngrx/store';
import { TaskManagerStore } from './taskmanager/taskmanager.store';
import { taskManagerReducer } from './taskmanager/taskmanager.reducer';

export interface AppState
{
    taskmanager: TaskManagerStore
}

/**
 * App root store containing all reducers.
 */
export const reducers: ActionReducerMap<object, Action> = {
    taskmanager: taskManagerReducer
};