import { ItemService } from './../../services/item.service';
import { ExercicioItem } from './../../models/exercicio-item';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})

export class ItensComponent implements OnInit {
  
  loading$: Observable<boolean>;
  exercicioItens$: Observable<ExercicioItem[]>;
 
  constructor(private itemService: ItemService) {
    this.exercicioItens$ = itemService.entities$;
    this.loading$ = itemService.loading$;
  }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  add(exercicioItem: ExercicioItem) {
    this.itemService.add(exercicioItem);
  }
 
  delete(exercicioItem: ExercicioItem) {
    this.itemService.delete(exercicioItem.id);
  }
 
  getHeroes() {
    this.itemService.getAll();
  }
 
  update(exercicioItem: ExercicioItem) {
    this.itemService.update(exercicioItem);
  }

}
