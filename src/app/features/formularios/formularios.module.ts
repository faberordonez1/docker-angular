import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './pages/reactivo/grid/grid.component';
import { FormulariosRoutingModule } from './formulario-routing.module';

//Importacion para formulario reactivo
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Importaciones para ngModel


@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    CommonModule,
    // Enrutamiento
    FormulariosRoutingModule,
    //Formulario Reactivo
    ReactiveFormsModule,
   // ngodel
  ]
})
export class FormulariosModule { }
