import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { map } from 'rxjs'; Как реализовать + pipe
import { TodoService } from '../services/todo.service';
import { ITodo } from './todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<ITodo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    console.log('asd');
    this.todos$ = this.todoService.getTodos();
    console.log('qwqwqw');
  }
}

// асингпайп в шаблоне
