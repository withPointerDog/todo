import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  catchError,
  Observable,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { ENV } from 'src/environments/environment';
import { ITodo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos$ = new BehaviorSubject<ITodo[]>([]);
  constructor(private http: HttpClient) {}
  // TODO: Create comments for Observable
  getTodos(): Observable<ITodo[]> {
    return this.todos$.asObservable().pipe(
      switchMap((todos: ITodo[]) => {
        if (todos.length) {
          return of(todos);
        }
        return this.fetchTodos();
      })
    );
  }

  fetchTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(ENV.restApiUrl).pipe(
      tap((todos) => {
        this.transformTodoListItems(todos);
        this.todos$.next(todos);
      }),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(error.message));
      })
    );
  }

  transformTodoListItems(todos: Array<ITodo>): void {
    todos.forEach((todo: ITodo) => {
      todo.description = '';
      todo.categoryId = 6;
    });
  }

  addNewTodo(
    title: ITodo['title'],
    description: ITodo['description'],
    categoryId: ITodo['categoryId']
  ): void {
    const newTodo: ITodo = {
      userId: 1,
      id: 0,
      title,
      categoryId,
      completed: false,
      description,
    };
    const todos = [...this.todos$.value, newTodo];
    this.todos$.next(todos);
  }

  removeTodo(id: ITodo['id']): void {
    const todos = this.todos$.value;
    const indexTodo = todos.findIndex((todo) => todo.id === id);
    todos.splice(indexTodo, 1);
    this.todos$.next(todos);
  }

  changeTodoStatus(id: ITodo['id']): ITodo['completed'] | null {
    const todos = this.todos$.value;
    this.todos$.next(todos);
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      return (todo.completed = !todo.completed);
    }
    return null;
  }
}
