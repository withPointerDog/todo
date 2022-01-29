import { Component, Input } from '@angular/core';
import { ICategory } from '../shared/models/category.model';
import { ITodo } from '../shared/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo!: ITodo;
  @Input() categoryes!: ICategory[];
}
