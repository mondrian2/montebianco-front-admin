import { ExercicioService } from './../../services/exercicio.service';
import { Exercicio } from './../../models/exercicio';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(private router: Router, private srv: ExercicioService) { 
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

  goCreate() {
    this.router.navigate(["/exercicio-add"])
  }

  update(id: number, data: Exercicio){
    this.srv.update(id, data);
  }

  delete(id: number){
    this.srv.delete(id);
  }

}
