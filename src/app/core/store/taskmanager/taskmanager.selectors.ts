import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskManagerStore } from './taskmanager.store';

const getTaskManagerState = createFeatureSelector<TaskManagerStore>('taskmanager');

export const getListTask = createSelector(
    getTaskManagerState,
    (store: TaskManagerStore) => store.listTask
);

export const getLoading = createSelector(
    getTaskManagerState,
    (store: TaskManagerStore) => store.loading
);

export const getEditTask = createSelector(
    getTaskManagerState,
    (store: TaskManagerStore) => store.editTask
);