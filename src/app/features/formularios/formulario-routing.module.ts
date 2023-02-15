import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './pages/reactivo/grid/grid.component';

const routes: Routes = [ 
    {//rc => Reactivo
      path: 'rc', component: GridComponent,
      children: [
            { path: 'grid', component: GridComponent },
          ],
    },
    // {
    //   path: 'demo', //Demo con rutas hijas
    //   children: [
    //     { path: 'hijo', component: ProductosComponent },
    //   ],
    // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],//Child en modulo hijo
  exports: [RouterModule]
})
export class FormulariosRoutingModule { }
