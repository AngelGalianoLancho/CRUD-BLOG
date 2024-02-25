import {Routes } from '@angular/router';
import { ListComponent } from './post/list/list.component';
import { ViewComponent } from './post/view/view.component';
import { CreateComponent } from './post/create/create.component';
import { UpdateComponent } from './post/update/update.component';

export const routes: Routes = [
  //{ path: '', redirectTo: '/post', pathMatch: 'full' },
  { path: 'post', component: ListComponent },
  { path: 'post/:id', component: ViewComponent },
  { path: 'post/create', component: CreateComponent },
  { path: 'post/:id/edit', component: UpdateComponent },
  { path: '**', component: ListComponent },
];
