import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel/painel.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { DialogCreateComponent } from './dialog-create/dialog-create.component';
import { DialogCompleteComponent } from './dialog-complete/dialog-complete.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    PainelComponent,
    DialogDeleteComponent,
    DialogCreateComponent,
    DialogCompleteComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    MatSlideToggleModule
  ],
  exports: [
    PainelComponent
  ]
})
export class ComponentsModule { }