import { ExercicioItem } from './../../models/exercicio-item';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {

  msg: string
  name = '';
  frase = '';
  options: [];
  preview: string[] = [];
  form: FormGroup;
  item: ExercicioItem;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      website: this.formBuilder.array([], [Validators.required])
    });
    this.item = new ExercicioItem;
    this.item.opcoes = [];
  }

  onCheckboxChange(e: any) {
    const website: FormArray = this.form.get('website') as FormArray;
    if (e.target.checked) {
      website.push(new FormControl(e.target.value));
    } else {
      const index = website.controls.findIndex(x => x.value === e.target.value);
      website.removeAt(index);
    }
  }

  optionsChanged($event: any) {
    this.options = $event.split(' ');
  }

  setPreview() {
    this.preview = [];
    console.log(this.options)
    this.options.forEach(op => {
      if (this.form.value.website.indexOf(op) >= 0) {
        this.preview.push(`[${op}]`);
      } else {
        this.preview.push(op);
      }
    });
    this.frase = this.preview.join(' ');
  }

  submit() {
    this.setPreview();
    this.item.exercicio_id = 1;
    this.item.tipo_id = 1;
    this.item.item = this.name;
    this.item.opcoes = [];
    this.options.forEach(op => {
      if (this.form.value.website.indexOf(op) >= 0) {
        this.item.opcoes.push(op);
      }
    });
    console.log('item', this.item);
  }

  ngOnInit(): void {
  }

}
