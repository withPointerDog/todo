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
import { ITodo } from '../todo-list/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos$ = new BehaviorSubject<ITodo[]>([]);
  constructor(private http: HttpClient) {}

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

  transformTodoListItems(arr: Array<ITodo>): void {
    arr.forEach(
      (obj: ITodo) => ((obj.description = ''), (obj.category = 'general'))
    )
  }
}
