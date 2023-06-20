import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { TaskManagerStore } from './taskmanager.store';

export const initialState: Partial<TaskManagerStore> = {
    loading: false
};

const reducer: ActionReducer<Partial<TaskManagerStore>, Action> = createReducer(
    initialState,
);

export function taskManagerReducer(
    state: Partial<TaskManagerStore> = initialState,
    action: Action
): Partial<TaskManagerStore>
{
    return reducer(state, action);
}