import { ExercicioTipo } from './../../models/exercicio-tipo';
import { ExercicioItem } from './../../models/exercicio-item';
import { Component, OnInit } from '@angular/core';
import { Exercicio } from 'src/app/models/exercicio';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {
  
  icon: string;
  exercicio: Exercicio;
  tipo: ExercicioTipo;
  item: ExercicioItem;
  
  constructor() {
    this.exercicio = new Exercicio;
    this.tipo = new ExercicioTipo;
    this.item = new ExercicioItem;
    this.item.opcoes = [];
   }

  ngOnInit(): void {
    this.icon = 'send';

    this.exercicio.comando = "";
    this.exercicio.id = 1
    
    this.tipo.id = 1;
    this.tipo.tipo = "Completar";

    this.item.exercicio_id = this.exercicio.id;
    this.item.tipo_id = this.tipo.id;
    this.item.item = 'complete le frase ';
    this.item.opcoes.push('teste1');
    this.item.opcoes.push('teste2');

    console.log(this.item)
  }

}
