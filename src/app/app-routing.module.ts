import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SearchComponent } from './search/search.component';
import { UserResolver } from './services/user-resolver/user-resolver.service';
import { UsersCountResolver } from './services/user-resolver/users-count.service';


const routes: Routes = [
  { path: '', component: SearchComponent },
  {
    path: 'search-result/:user',
    component: UserListComponent,
    resolve: { users: UserResolver, usersCount: UsersCountResolver }
  },
  { path: '**', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
