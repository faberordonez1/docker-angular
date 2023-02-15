import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
    //Mpudlos cargados con lazy load
      {path:'form',loadChildren:()=> import('./features/formularios/formularios.module').then(modulo => modulo.FormulariosModule)},
    //   {path:'ventas',loadChildren:()=> import('./features/ventas/ventas.module').then(modulo => modulo.VentasModule)},
    //   {path:'productos',loadChildren:()=> import('./features/productos/productos.module').then(modulo => modulo.ProductosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
