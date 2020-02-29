import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { User } from 'src/app/user';
import { UserService } from '../user-service/user.service';
import { tap, filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UsersCountResolver implements Resolve<User[]> {
  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    const searchTerm: string = route.paramMap.get('user');
    return this.userService.getUsers(searchTerm);
  }
}

