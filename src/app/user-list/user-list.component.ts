import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  errorMessage: string;
  users: User[];

  sub: Subscription;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    this.users = this.route.snapshot.data.users;
    console.log(this.route.snapshot.data.users.items);
    // const searchTerm: string = this.route.snapshot.queryParams['user'];
    // this.sub = this.userService.getUsers(searchTerm).subscribe({
    //   next: (users: User[]) => this.users = users,
    //   error: (err: any) => this.errorMessage = err.error
    // });
  }

}
