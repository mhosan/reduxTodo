import { createReducer, on } from '@ngrx/store';
import { crear } from './todo.actions';
import { Todo } from './models/todo.models';

export const estadoInicial:Todo[] = [
    new Todo ('mandar a cagar a todos')
];

const _todoReducer = createReducer(
    estadoInicial,
    on(crear, (state, {texto}) => [...state, new Todo (texto)]),
  );

export function todoReducer(state:any, action:any){
    return _todoReducer(state, action);
}