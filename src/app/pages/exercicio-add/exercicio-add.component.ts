import { Exercicio } from './../../models/exercicio';
import { ExercicioService } from './../../services/exercicio.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-exercicio-add',
  templateUrl: './exercicio-add.component.html',
  styleUrls: ['./exercicio-add.component.scss']
})
export class ExercicioAddComponent implements OnInit {

  icon: string;
  form: FormGroup
  msg: string
  response: any

  constructor(private srv: ExercicioService, private route: Router) { }

  createForm(exercicio: Exercicio){
    this.form = new FormGroup({
      comando: new FormControl(exercicio.comando)
    })    
  }

  onSubmit(){
    console.log(this.form.value)
    // this.srv.create(this.form.value)
    // .subscribe(r => this.success())
  }

  success(){
    this.msg = "Gravado com sucesso"
    this.limpaForm()
    this.removeMsg()
  }

  limpaForm(){
    this.form.patchValue({
      titulo: ''
    });
  }

  removeMsg(){
    setTimeout(()=>{
      this.msg = null;
    }, 2000);
  }

  goList() {
    this.route.navigate(['exercicios'])
  }

  ngOnInit(): void {
    this.icon = 'send';
    this.createForm(new Exercicio())
  }
}
