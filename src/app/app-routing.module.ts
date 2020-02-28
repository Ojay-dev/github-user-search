import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { SearchComponent } from './search/search.component';
import { UserResolver } from './services/user-resolver/user-resolver.service';


const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'search-result/:user', component: UserListComponent, resolve: {users: UserResolver} }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
