import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../todo-list/todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemsComponent implements OnInit {
  todos$!: Observable<ITodo[]>;
  @Input() todo: any;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }
}
