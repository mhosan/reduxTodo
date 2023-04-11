import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;

  ngOnInit(): void {
    this.todo.completado=true;
    console.log(this.todo.completado);
  }

}
