import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-edit',
  templateUrl: './modulo-edit.component.html',
  styleUrls: ['./modulo-edit.component.scss']
})
export class ModuloEditComponent implements OnInit {

  icon: string;

  constructor() { }

  ngOnInit(): void {
    this.icon = 'send';
  }

}
