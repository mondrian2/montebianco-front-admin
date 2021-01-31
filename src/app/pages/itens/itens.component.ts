import { ExercicioItem } from './../../models/exercicio-item';
import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.scss']
})
export class ItensComponent implements OnInit {

  exercicioItem: ExercicioItem;

  constructor(private router: Router, private srv: ItemService) { 
    this.exercicioItem = new ExercicioItem;
  }

  ngOnInit(): void {
  }

  goCreate() {
    this.router.navigate(["/item-add"])
  }

  update(id: number, data: ExercicioItem){
    this.srv.update(id, data);
  }

  delete(id: number){
    this.srv.delete(id);
  }

}
