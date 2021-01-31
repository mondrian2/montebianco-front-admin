import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.component.html',
  styleUrls: ['./modulos.component.scss']
})
export class ModulosComponent implements OnInit {

  iconCreate: string
  iconDelete: string
  iconEdit: string
  iconSearch: string

  constructor() { }

  ngOnInit(): void {
    this.iconCreate = 'add';
    this.iconDelete = 'delete_forever';
    this.iconEdit = 'create';
    this.iconSearch = 'search';
  }

}
