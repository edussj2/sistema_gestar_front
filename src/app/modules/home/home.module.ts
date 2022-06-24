import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* === Routing == */
import { HomeRoutingModule } from './home-routing.module';

/* === Modulo Shared === */
import { SharedModule } from '@shared/shared.module';

/* === Componentes == */
import { HomePageComponent } from './pages/home-page/home-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
