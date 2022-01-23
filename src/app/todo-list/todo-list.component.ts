import { Component, OnInit } from '@angular/core';
// import { map } from 'rxjs'; Как реализовать + pipe
import { TodoService } from '../services/todo.service';
import { todosInterface } from './todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos: Array<todosInterface> = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodo().subscribe((todos: Array<todosInterface>) => {
      this.todos = todos;
      this.todoService.setValueTodoList(this.todos);
    });
  }
}
