import { ExercicioService } from './../../services/exercicio.service';
import { Exercicio } from './../../models/exercicio';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})

export class ExerciciosComponent implements OnInit {
  
  loading$: Observable<boolean>;
  exercicios$: Observable<Exercicio[]>;
 
  constructor(private exercicioService: ExercicioService) {
    this.exercicios$ = exercicioService.entities$;
    this.loading$ = exercicioService.loading$;
  }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  add(exercicio: Exercicio) {
    this.exercicioService.add(exercicio);
  }
 
  delete(exercicio: Exercicio) {
    this.exercicioService.delete(exercicio.id);
  }
 
  getHeroes() {
    this.exercicioService.getAll();
  }
 
  update(exercicio: Exercicio) {
    this.exercicioService.update(exercicio);
  }

}
