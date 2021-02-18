import { EntityMetadataMap } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Exercicio: {},
  ExercicioItem: {},
  ExercicioTipo: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = { 
    Exercicio: 'Exercicios',
    ExercicioItem: 'ExercicioItens',
    ExercicioTipo: 'ExercicioTipos' 
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};