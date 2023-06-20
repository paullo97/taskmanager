import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { ITask } from 'src/app/core/model/task.model';
import { createTask } from 'src/app/core/store/taskmanager/taskmanager.actions';
import { getEditTask } from 'src/app/core/store/taskmanager/taskmanager.selectors';
import { TaskManagerStore } from 'src/app/core/store/taskmanager/taskmanager.store';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-dialog-create',
  templateUrl: './dialog-create.component.html',
  styleUrls: ['./dialog-create.component.scss']
})
export class DialogCreateComponent implements OnInit, OnDestroy{

  public title: string = '';
  public description: string = '';
  public finish: boolean = false;

  public edit: boolean = false;

  public taskEdit$: Observable<ITask> = this.taskStore.select(getEditTask);
  public sub: Subscription = new Subscription;

  private idTask: string = '';

  constructor(
    public dialogRef: MatDialogRef<DialogCreateComponent>,
    private readonly taskStore: Store<TaskManagerStore>,
    private _snackBar: MatSnackBar
  )
  { }
  
  public ngOnDestroy(): void {
    this.title = '';
    this.description = '';
    this.finish = false;
    this.idTask = '';
    this.sub.unsubscribe();
  }

  public ngOnInit(): void {
    this.sub.add(
      this.taskEdit$.subscribe((data: ITask) =>
      {
        if(!data)
        {
          this.edit = false;
        }
        else
        {
          this.edit = true;
          this.title = data.title;
          this.description = data.title;
          this.finish = data.finish;
          this.idTask = data.id!;
        }
      })
    );
  }

  public saveTask(): void
  {
    if(this.edit)
    {

    }
    else
    {
      this.taskStore.dispatch(createTask({
        task: {
          id: uuidv4(),
          title: this.title,
          finish: this.finish,
          description: this.description
        }
      }));
    }

    this._snackBar.open('Task Registrada Com sucesso', 'OK', { duration: 1500 });
    this.dialogRef.close();
  }
}
