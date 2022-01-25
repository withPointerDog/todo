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

  setValueTodoList(arr: Array<object>): void {
    arr.map(
      (obj: any) => (
        (obj.description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sit neque labore autem, excepturi velit eveniet tempore modi similique inventore saepe dolorum accusamus eius minima fugit doloribus? Deserunt esse accusantium repellat exercitationem quam, consequatur, harum mollitia maxime delectus possimus, molestias accusamus saepe excepturi nam iure distinctio! Dolor sed labore eius laudantium magni facilis quibusdam illo quo exercitationem. Ex, voluptas accusamus quo laboriosam nihil deleniti sit porro dolor laborum unde officia sed quibusdam repellendus ab totam adipisci ea, autem dicta quas ratione vero officiis eos facere soluta. Quibusdam corporis autem ad sequi, expedita inventore quia quaerat itaque nulla quo! A, illum?'),
        (obj.category = 'general')
      )
    );
  }


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
        this.setValueTodoList(todos);
        this.todos$.next(todos); // TODO: create transform method
      }),
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error(error.message));
      })
    );
  }
}
