import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo-add',
  templateUrl: './modulo-add.component.html',
  styleUrls: ['./modulo-add.component.scss']
})
export class ModuloAddComponent implements OnInit {

  icon: string;

  constructor() { }

  ngOnInit(): void {
    this.icon = 'send';
  }

}
