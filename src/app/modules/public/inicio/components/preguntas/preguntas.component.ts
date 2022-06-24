import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  /* === Variables === */
  public flag1: boolean = false;
  public flag2: boolean = false;
  public flag3: boolean = false;
  public flag4: boolean = false;
  public flag5: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
