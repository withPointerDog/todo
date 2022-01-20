import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from '../authentication/authentication.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

const routes: Routes = [
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'todo-list', component: TodoListComponent },
  { path: '', redirectTo: '/authentication', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
