import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.models';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
  todos: Todo[] = [];

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    //suscribirme a los nodos que cambian, usando el AppState general
    this.store.select('todos')
      .subscribe( todos => this.todos = todos); //cada vez que se reciba un cambio se va a actualizar mi todos local
  }

}
