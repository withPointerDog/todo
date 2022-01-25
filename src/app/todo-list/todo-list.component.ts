import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { ITodo } from './todo';
import { CategoryDirective } from '../category.directive';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<ITodo[]>;
  // @ViewChild('myname') p!: ElementRef;
  constructor(private todoService: TodoService, private el: ElementRef) {}

  ngOnInit(): void {
    console.log('asd');
    this.todos$ = this.todoService.getTodos();
    console.log(this.todos$);
  }

  // ngAfterViedInit(): void {
  //   console.log(this.p.nativeElement);
  // }
}

// асингпайп в шаблоне
