import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  newPropertyForTodo: Array<string> = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe at aliquam molestias sunt hic, commodi voluptates perferendis quos asperiores, neque optio animi eligendi debitis obcaecati blanditiis odit est ex expedita dolores! Explicabo nesciunt fugit ullam.',
    'general',
  ];

  constructor(private http: HttpClient) {}

  getTodo(): Observable<any> {
    return this.http.get(environment.restApiUrl);
  }

  setValueTodoList(arr: Array<object>): void {
    arr.map(
      (obj: any) => (
        (obj.description = this.newPropertyForTodo[0]),
        (obj.category = this.newPropertyForTodo[1])
      )
    );
  }
}
