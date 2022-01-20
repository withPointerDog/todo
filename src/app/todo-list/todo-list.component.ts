import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoList: Array<object> = [];
  constructor(private http: HttpClient, private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodo().subscribe((todoList: Array<object>) => {
      console.log('result', JSON.stringify(todoList));
      this.todoList = todoList;
    });
  }
}
