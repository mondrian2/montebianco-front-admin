import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-edit',
  templateUrl: './exercicio-edit.component.html',
  styleUrls: ['./exercicio-edit.component.scss']
})
export class ExercicioEditComponent implements OnInit {

  icon: string;

  constructor() { }

  ngOnInit(): void {
    this.icon = 'send';
  }

}
