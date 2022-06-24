import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* === Componentes === */
import { InicioPageComponent } from './../inicio/pages/inicio-page/inicio-page.component';

const routes: Routes = [
  {
    path: '',
    component: InicioPageComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
