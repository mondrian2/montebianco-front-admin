import { ExercicioTipo } from './../models/exercicio-tipo';
import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
 
@Injectable({ providedIn: 'root' })
export class TipoService extends EntityCollectionServiceBase<ExercicioTipo> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('ExercicioTipo', serviceElementsFactory);
  }
}
