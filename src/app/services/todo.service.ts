import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { ITodo } from '../todo-list/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos$ = new BehaviorSubject<ITodo[]>([]);
  constructor(private http: HttpClient) {}

  // getTodo(): Observable<any> {
  //   return this.http.get(environment.restApiUrl);
  // }

  // setValueTodoList(arr: Array<object>): void {
  //   arr.map(
  //     (obj: any) => (
  //       (obj.description = this.newPropertyForTodo[0]),
  //       (obj.category = this.newPropertyForTodo[1])
  //     )
  //   );
  // }


  getTodos(): Observable<ITodo[]> {
    return this.todos$.asObservable().pipe(
      switchMap((todos: ITodo[]) => {
        if (todos.length) {
          return of(todos);
        }
        console.log(123);
        return this.fetchTodos();
      })
    );
  }

  fetchTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(environment.restApiUrl).pipe(
      tap((todos) => {
        console.log(todos);
        this.todos$.next(todos); // TODO: create transform method
      }),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(error.message));
      })
    );
  }
}
