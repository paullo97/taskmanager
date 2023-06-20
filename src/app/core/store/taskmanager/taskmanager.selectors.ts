import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TaskManagerStore } from './taskmanager.store';

const getTaskManagerState = createFeatureSelector<TaskManagerStore>('taskmanager');