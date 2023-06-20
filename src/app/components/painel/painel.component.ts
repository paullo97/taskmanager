import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogDeleteComponent } from "../dialog-delete/dialog-delete.component";
import { DialogCompleteComponent } from "../dialog-complete/dialog-complete.component";
import { DialogCreateComponent } from "../dialog-create/dialog-create.component";
import { Store } from "@ngrx/store";
import { TaskManagerStore } from "src/app/core/store/taskmanager/taskmanager.store";
import { getListTask, getLoading } from "src/app/core/store/taskmanager/taskmanager.selectors";
import { Observable } from "rxjs";
import { ITask } from "src/app/core/model/task.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { completeTasks, deleteTask, editTask } from "src/app/core/store/taskmanager/taskmanager.actions";

@Component({
    selector: 'painel-app',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.scss']
})
export class PainelComponent {
    public loading$: Observable<boolean> = this.taskStore.select(getLoading);
    public listTask$: Observable<Array<ITask>> = this.taskStore.select(getListTask);
    
    public itensSelecionados: Array<ITask> = [];

    constructor(
        public dialog: MatDialog,
        private readonly taskStore: Store<TaskManagerStore>,
        private _snackBar: MatSnackBar

    )
    { }

    public deleteTasks(): void {
        if(this.itensSelecionados.length === 0)
        {
            this._snackBar.open('É preciso ao menos ter uma Task para realizar o Delete', 'OK', { duration: 2000 });
            return;
        }

        this.dialog.open(DialogDeleteComponent).afterClosed().subscribe((data) =>
        {
            if(data)
            {
                this.taskStore.dispatch(deleteTask({ tasks: this.itensSelecionados }));
                this._snackBar.open('Task Deletadas Com sucesso!', 'OK', { duration: 2000 });
            }
        })
    }

    public completeTasks(): void {
        if(this.itensSelecionados.length === 0)
        {
            this._snackBar.open('É preciso ao menos ter uma Task selecionada para Finaliza-las', 'OK', {duration: 2000});
            return;
        }

        this.dialog.open(DialogCompleteComponent).afterClosed().subscribe((data) =>
        {
            if(data)
            {
                this.taskStore.dispatch(completeTasks({
                    tasks: this.itensSelecionados
                }));
            }
        });
    }

    public createTask(): void
    {
        this.dialog.open(DialogCreateComponent);
    }

    public editTask(): void
    {
        if(this.itensSelecionados.length != 1)
        {
            this._snackBar.open('Para Editar uma tarefa, precisa ter somente uma Task Selecionada', 'OK', {duration: 2000})
            return;
        }

        this.taskStore.dispatch(editTask({
            task: this.itensSelecionados[0]
        }));

        this.dialog.open(DialogCreateComponent);
    }
}