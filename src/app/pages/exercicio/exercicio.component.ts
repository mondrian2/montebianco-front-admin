import { Exercicio } from './../../models/exercicio';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio',
  templateUrl: './exercicio.component.html',
  styleUrls: ['./exercicio.component.scss']
})
export class ExercicioComponent implements OnInit {

  @Input() exercicio: Exercicio;
  
  constructor() { 
    this.exercicio = new Exercicio;
  }

  ngOnInit(): void {
    this.exercicio.comando = 'Completate le frasi con gli articoli determinativi e il verbo essere';
  }

}
