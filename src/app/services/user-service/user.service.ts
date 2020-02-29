import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { User } from '../../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private githubUsersUrl = 'https://api.github.com/search/users?q=';
  private users: User[];

  constructor(private http: HttpClient) { }

  // getUsers(): Observable<User[]> {
  getUsers(searchTerm: string): Observable<any> {
    if (this.users) {
      return of(this.users);
    }
    return this.http.get<any>(this.githubUsersUrl + searchTerm)
      .pipe(
        // tap(data => console.log(JSON.stringify(data.items))),
        tap(data => this.users = data),
        catchError(this.handleError)
      );
  }

  getUser(url: string): Observable<any> {
    // if (this.users) {
    //   return of(this.users);
    // }
    return this.http.get<User[]>(url)
      .pipe(
        // tap(data => console.log(JSON.stringify(data))),
        tap(data => this.users = data),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
