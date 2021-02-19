import { ExercicioEditComponent } from './pages/exercicio-edit/exercicio-edit.component';
import { ExercicioAddComponent } from './pages/exercicio-add/exercicio-add.component';
import { ModuloAddComponent } from './pages/modulo-add/modulo-add.component';
import { ModuloEditComponent } from './pages/modulo-edit/modulo-edit.component';
import { ModulosComponent } from './pages/modulos/modulos.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuloComponent } from './pages/modulo/modulo.component';
import { ItemComponent } from './pages/item/item.component';
import { ExercicioComponent } from './pages/exercicio/exercicio.component';
import { ExerciciosComponent } from './pages/exercicios/exercicios.component';
import { TiposComponent } from './pages/tipos/tipos.component';
import { TipoComponent } from './pages/tipo/tipo.component';
import { TipoAddComponent } from './pages/tipo-add/tipo-add.component';
import { TipoEditComponent } from './pages/tipo-edit/tipo-edit.component';
import { ItensComponent } from './pages/itens/itens.component';
import { ItemAddComponent } from './pages/item-add/item-add.component';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'modulos', component: ModulosComponent},
  {path: 'modulo/:id', component: ModuloComponent},
  {path: 'modulo-edit/:id', component: ModuloEditComponent},
  {path: 'modulo-add', component: ModuloAddComponent},

  {path: 'exercicios', component: ExerciciosComponent},
  {path: 'exercicio/:id', component: ExercicioComponent},
  {path: 'exercicio-add', component: ExercicioAddComponent},
  {path: 'exercicio-edit/:id', component: ExercicioEditComponent},

  {path: 'tipos', component: TiposComponent},
  {path: 'tipo/:id', component: TipoComponent},
  {path: 'tipo-add', component: TipoAddComponent},
  {path: 'tipo-edit/:id', component: TipoEditComponent},

  {path: 'itens', component: ItensComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'item-add', component: ItemAddComponent},
  {path: 'item-edit/:id', component: ItemEditComponent},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
