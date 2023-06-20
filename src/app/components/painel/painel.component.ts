import { Component } from "@angular/core";

@Component({
    selector: 'painel-app',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.scss']
})
export class PainelComponent
{
    public typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers', 'Sneakers', ];
    itensSelecionados: string[] = [];

    public  obterItensSelecionados() {
        console.log('Itens Selecionados:', this.itensSelecionados);
      }
}