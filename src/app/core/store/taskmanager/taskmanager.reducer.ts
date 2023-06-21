import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { TaskManagerStore } from './taskmanager.store';
import { completeTasks, createTask, deleteTask, editTask, editTaskSave } from './taskmanager.actions';

export const initialState: Partial<TaskManagerStore> = {
    loading: false,
    listTask: [],
    editTask: undefined
};

const reducer: ActionReducer<Partial<TaskManagerStore>, Action> = createReducer(
    initialState,
    on(createTask, (state, action) => ({
        ...state,
        listTask: [...(state.listTask || []), action.task]
    })),
    on(editTask, (state, action) => ({
        ...state,
        editTask: action.task
    })),
    on(deleteTask, (state, action) => ({
        ...state,
        listTask: state.listTask?.filter((task) => !action.tasks.includes(task))
    })),
    on(completeTasks, (state, action) => ({
        ...state,
        listTask: state.listTask?.map((task) =>
        {
            if(action.tasks.includes(task))
            {
                return { ...task, finish: true }
            }
            return task;
        })
    })),
    on(editTaskSave, (state, action) => ({
        ...state,
        listTask: state.listTask?.map((task) =>
        {
            if(action.id === task.id)
            {
                return {
                    title: action.title,
                    description: action.description,
                    finish: action.finish
                }
            }

            return task;
        })
    }))
);

export function taskManagerReducer(
    state: Partial<TaskManagerStore> = initialState,
    action: Action
): Partial<TaskManagerStore>
{
    return reducer(state, action);
}