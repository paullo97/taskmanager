import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel/painel.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatPaginatorModule
  ],
  exports: [
    PainelComponent
  ]
})
export class ComponentsModule { }