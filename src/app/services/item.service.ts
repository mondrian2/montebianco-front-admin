import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { ExercicioItem } from '../models/exercicio-item';
 
@Injectable({ providedIn: 'root' })
export class ItemService extends EntityCollectionServiceBase<ExercicioItem> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('ExercicioItem', serviceElementsFactory);
  }
}
