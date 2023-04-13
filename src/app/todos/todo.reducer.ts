import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar } from './todo.actions';
import { Todo } from './models/todo.models';

export const estadoInicial: Todo[] = [
    new Todo('mandar a cagar a alguien'),
    new Todo('pedir agua'),
    new Todo('desear feliz año nuevo'),
];

const _todoReducer = createReducer(
    estadoInicial,

    on(crear, (state, { texto }) => [...state, new Todo(texto)]),

    on(borrar, ( state, { id } ) => state.filter(todo => todo.id !== id) ),

    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completado: !todo.completado
                }
            } else {
                return todo;
            }
        });
    }),

    on(editar, (state, { id, texto }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    texto: texto
                }
            } else {
                return todo;
            }
        });
    }),
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}