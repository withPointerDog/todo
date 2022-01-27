import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../todo-list/todo';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: any;
  todos$!: Observable<ITodo[]>;
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }
}

//   private setHighLight(color: string) {
//     // this.el.nativeElement.style.backgroundColor = color;
//     this.renderer.setStyle(this.el.nativeElement, 'color', color);
// }
// @HostListener('mouseover') mouseEnter() {
// this.setHighLight('red');
// }
// @Input() color: any = 'red';
