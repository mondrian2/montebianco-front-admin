import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './shared/top/top.component';
import { BtnComponent } from './shared/btn/btn.component';
import { ProdutoComponent } from './shared/produto/produto.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ModulosComponent } from './pages/modulos/modulos.component';
import { ModuloComponent } from './pages/modulo/modulo.component';
import { StatusVideoComponent } from './shared/status-video/status-video.component';
import { StatusPacoteComponent } from './shared/status-pacote/status-pacote.component';
import { BtnItemComponent } from './shared/btn-item/btn-item.component';
import { ItemComponent } from './pages/item/item.component';
import { ExercicioComponent } from './pages/exercicio/exercicio.component';
import { ModuloEditComponent } from './pages/modulo-edit/modulo-edit.component';
import { ModuloAddComponent } from './pages/modulo-add/modulo-add.component';
import { ExercicioAddComponent } from './pages/exercicio-add/exercicio-add.component';
import { ExercicioEditComponent } from './pages/exercicio-edit/exercicio-edit.component';
import { ExerciciosComponent } from './pages/exercicios/exercicios.component';
import { TiposComponent } from './pages/tipos/tipos.component';
import { TipoComponent } from './pages/tipo/tipo.component';
import { TipoAddComponent } from './pages/tipo-add/tipo-add.component';
import { TipoEditComponent } from './pages/tipo-edit/tipo-edit.component';
import { ItensComponent } from './pages/itens/itens.component';
import { ItemAddComponent } from './pages/item-add/item-add.component';
import { ItemEditComponent } from './pages/item-edit/item-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardItemComponent } from './shared/card-item/card-item.component';
import { CardExercicioComponent } from './shared/card-exercicio/card-exercicio.component';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from 'entity-metadata';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    BtnComponent,
    ProdutoComponent,
    LoginComponent,
    ModulosComponent,
    ModuloComponent,
    StatusVideoComponent,
    StatusPacoteComponent,
    BtnItemComponent,
    ItemComponent,
    ExercicioComponent,
    ModuloEditComponent,
    ModuloAddComponent,
    ExercicioAddComponent,
    ExercicioEditComponent,
    ExerciciosComponent,
    TiposComponent,
    TipoComponent,
    TipoAddComponent,
    TipoEditComponent,
    ItensComponent,
    ItemAddComponent,
    ItemEditComponent,
    CardItemComponent,
    CardExercicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
