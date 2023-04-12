import { createReducer, on } from '@ngrx/store';
import { crear, toggle } from './todo.actions';
import { Todo } from './models/todo.models';

export const estadoInicial: Todo[] = [
    new Todo('mandar a cagar a todos'),
    new Todo('pedir que se hagan garchar por un burro viudo'),
    new Todo('desearles una picazon de huevos a todos'),
];

const _todoReducer = createReducer(
    estadoInicial,
    on(crear, (state, { texto }) => [...state, new Todo(texto)]),
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
);

export function todoReducer(state: any, action: any) {
    return _todoReducer(state, action);
}