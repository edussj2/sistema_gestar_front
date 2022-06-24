import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('@modules/public/inicio/inicio.module').then( m => m.InicioModule),
  },
  {
    path: 'tratamientos',
    loadChildren:() => import('@modules/public/tratamientos/tratamientos.module').then( m => m.TratamientosModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
