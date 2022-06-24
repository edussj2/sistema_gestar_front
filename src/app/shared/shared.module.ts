import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* === Componentes === */
import { NavBarComponent } from './components/public/nav-bar/nav-bar.component';
import { LoaderComponent } from './components/public/loader/loader.component';
import { FooterComponent } from './components/public/footer/footer.component';



@NgModule({
  declarations: [
    NavBarComponent,
    LoaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    LoaderComponent,
    NavBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
