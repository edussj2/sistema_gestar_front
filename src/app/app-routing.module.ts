import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* === Guards === */

/* === Componentes === */
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { AdminPageComponent } from './modules/admin/pages/admin-page/admin-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() => import('./modules/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: '',
    component: HomePageComponent,
    loadChildren:() => import('./modules/home/home.module').then( m => m.HomeModule),
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    loadChildren:() => import('./modules/admin/admin.module').then( m => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling: "enabled", scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
