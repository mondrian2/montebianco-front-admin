import { ExercicioTipo } from './../../models/exercicio-tipo';
import { ExercicioItem } from './../../models/exercicio-item';
import { Component, OnInit } from '@angular/core';
import { Exercicio } from 'src/app/models/exercicio';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.scss']
})
export class ItemEditComponent implements OnInit {

  msg: string
  name = '';
  frase = '';
  options: [];
  preview: string[] = [];
  
  icon: string;
  exercicio: Exercicio;
  tipo: ExercicioTipo;
  item: ExercicioItem;
  form: FormGroup;

  
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      website: this.formBuilder.array([], [Validators.required])
    });
    this.exercicio = new Exercicio;
    this.tipo = new ExercicioTipo;
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

    console.log(this.route.snapshot.paramMap.get('id'))


    this.icon = 'send';

    this.exercicio.comando = "";
    this.exercicio.id = 1
    
    this.tipo.id = 1;
    this.tipo.tipo = "Completar";

    this.item.exercicio_id = this.exercicio.id;
    this.item.tipo_id = this.tipo.id;
    this.item.item = 'complete le frase ';
    this.name = this.item.item;
    this.optionsChanged(this.item.item)

    console.log(this.item)
  }

}
