import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../user';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  errorMessage: string;
  users: any[];
  usersLength: number;
  userExist: boolean;
  userName: string;


  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {


    this.users = this.route.snapshot.data.users;
    this.usersLength = this.users.length;
    this.userName = this.route.snapshot.params.user;
    this.userExist = (this.usersLength > 0) ? true : false;
    console.log(this.users[0].followers);
  }

  abbrNum(num, decPlaces) {
    decPlaces = Math.pow(10, decPlaces);
    const abbrev = ['k', 'm', 'b', 't'];

    for (let i = abbrev.length - 1; i >= 0; i--) {
      const size = Math.pow(10, (i + 1) * 3);

      if (size <= num) {
        num = Math.round(num * decPlaces / size) / decPlaces;

        if ((num === 1000) && (i < abbrev.length - 1)) {
          num = 1;
          i++;
        }

        num += abbrev[i];
        break;
      }
    }

    return num;
  }

}
