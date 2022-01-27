import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../shared/services/todo.service';
import { ITodo } from '../shared/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<ITodo[]>;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }
}
