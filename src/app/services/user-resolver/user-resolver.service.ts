import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/user';
import { UserService } from '../user.service';
import { tap, filter, map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserResolver implements Resolve<User[]> {
  constructor(private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {

    const searchTerm: string = route.paramMap.get('user');
    return this.userService.getUsers(searchTerm);
  }
}

