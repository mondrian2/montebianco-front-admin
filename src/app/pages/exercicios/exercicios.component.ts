import { Exercicio } from './../../models/exercicio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.scss']
})
export class ExerciciosComponent implements OnInit {

  iconCreate: string
  iconDelete: string
  iconEdit: string
  iconSearch: string
  exercicio: Exercicio;


  constructor() { 
    this.exercicio = new Exercicio;
  }

  ngOnInit(): void {
    this.iconCreate = 'add';
    this.iconDelete = 'delete_forever';
    this.iconEdit = 'create';
    this.iconSearch = 'search';

    this.exercicio.comando = "Completate le frasi con gli articoli determinativi e il verbo essere.";
    this.exercicio.id = 1;
  }

}
