import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-create',
  templateUrl: './dialog-create.component.html',
  styleUrls: ['./dialog-create.component.scss']
})
export class DialogCreateComponent {

  public edit: boolean = !!this.data.id;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
