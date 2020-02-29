import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { User } from 'src/app/user';
import { UserService } from '../user-service/user.service';
import { tap, filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserResolver implements Resolve<User[]> {
  totalCount: number;
  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    const searchTerm: string = route.paramMap.get('user');
    // return this.userService.getUsers(searchTerm);

    return this.userService.getUsers(searchTerm)
      .pipe(
        switchMap(user => combineLatest(user.items.map(data => this.userService.getUser(data.url))))
      );
  }
}

