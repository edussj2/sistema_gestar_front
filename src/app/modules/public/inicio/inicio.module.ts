import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* == Routing === */
import { InicioRoutingModule } from './inicio-routing.module';

/* == Componentes === */
//Pages
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';

//Componentes
import { PresentacionComponent } from './components/presentacion/presentacion.component';
import { TratamientosComponent } from './components/tratamientos/tratamientos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { PreguntasComponent } from './components/preguntas/preguntas.component';
import { BlogComponent } from './components/blog/blog.component';

/*== Shared === */
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    InicioPageComponent,
    PresentacionComponent,
    TratamientosComponent,
    NosotrosComponent,
    TestimoniosComponent,
    PreguntasComponent,
    BlogComponent,
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    SharedModule
  ]
})
export class InicioModule { }
