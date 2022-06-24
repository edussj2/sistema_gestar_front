import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* === Routing === */
import { AppRoutingModule } from './app-routing.module';
//Agregar # para recargar
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

/* === Animations === */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* === Http Client === */
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/* === Componente Principal === */
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { 
      provide: LocationStrategy, 
      useClass: HashLocationStrategy 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
