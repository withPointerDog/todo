import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'authentication', component: AuthenticationComponent },
      { path: 'todo-list', component: TodoListComponent },
      { path: '', redirectTo: '/authentication', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  exports: [
    [
      RouterModule.forRoot([
        { path: 'authentication', component: AuthenticationComponent },
        { path: 'todo-list', component: TodoListComponent },
        { path: '', redirectTo: '/authentication', pathMatch: 'full' },
        { path: '**', component: PageNotFoundComponent },
      ]),
    ],
  ],
})
export class RoutingModule {}
