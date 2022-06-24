import { Component, OnInit } from '@angular/core';

/* === Aos === */
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /* === Inicial === */
  ngOnInit(): void {
    AOS.init();
  }

}
