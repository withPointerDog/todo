import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss'],
})
export class NewTodoComponent implements OnInit {
  todoForm!: FormGroup;
  constructor(public todoSVC: TodoService) {}

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      todoTitle: new FormControl(''),
      todoDscrpt: new FormControl(''),
    });
  }
}
