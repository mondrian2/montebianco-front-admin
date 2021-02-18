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
  exercicioItems$: Observable<ExercicioItem[]>;
  iconCreate = 'iconCreate';

  constructor(private itemService: ItemService) {
    this.exercicioItems$ = itemService.entities$;
    this.loading$ = itemService.loading$;
  }

  add(exercicioItem: ExercicioItem): void {
    this.itemService.add(exercicioItem);
  }

  delete(exercicioItem: ExercicioItem): void {
    this.itemService.delete(exercicioItem.id);
  }

  getItens(): void {
    this.itemService.getAll();
  }

  update(exercicioItem: ExercicioItem): void {
    this.itemService.update(exercicioItem);
  }

  goCreate(): void {
    console.log('goCreate');
  }

  ngOnInit(): void {
    this.getItens();
  }

}
