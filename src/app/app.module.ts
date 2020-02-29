import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { SearchComponent } from './search/search.component';
import { UserService } from './services/user-service/user.service';
import { UserResolver } from './services/user-resolver/user-resolver.service';
import { UsersCountResolver } from './services/user-resolver/users-count.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    UserListComponent,
    SearchComponent
  ],
  providers: [
    UserService,
    UserResolver,
    UsersCountResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
