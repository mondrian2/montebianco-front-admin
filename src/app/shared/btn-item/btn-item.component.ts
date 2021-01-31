import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-item',
  templateUrl: './btn-item.component.html',
  styleUrls: ['./btn-item.component.scss']
})
export class BtnItemComponent implements OnInit {
  @Input() numero: Number;

  constructor() { }

  ngOnInit(): void {
  }

}
