import { ExercicioItem } from './../../models/exercicio-item';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() exercicioItem: ExercicioItem;

  item: string;
  opcoes: string[];

  constructor() { 
    this.item = '';
    this.opcoes = [];
  }

  ngOnInit(): void {
    this.item = this.exercicioItem.item;
    this.opcoes= this.exercicioItem.opcoes;
  }

}
