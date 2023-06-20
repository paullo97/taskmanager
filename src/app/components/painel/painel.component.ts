import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogDeleteComponent } from "../dialog-delete/dialog-delete.component";
import { DialogCompleteComponent } from "../dialog-complete/dialog-complete.component";
import { DialogCreateComponent } from "../dialog-create/dialog-create.component";

@Component({
    selector: 'painel-app',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.scss']
})
export class PainelComponent {
    public typesOfShoes: Array<string> = ['Boots', 'Clogs', 'Loafers', 'Moccasins'];
    public itensSelecionados: Array<string> = [];

    constructor(public dialog: MatDialog) { }

    public obterItensSelecionados(): void {
        console.log('Itens Selecionados:', this.itensSelecionados);
    }

    public deleteTasks(): void {
        this.dialog.open(DialogDeleteComponent);
    }

    public completeTasks(): void {
        this.dialog.open(DialogCompleteComponent);
    }

    public editCreate(args: string = ''): void {
        this.dialog.open(DialogCreateComponent, {
            data: {
                id: args
            }
        });
    }
}