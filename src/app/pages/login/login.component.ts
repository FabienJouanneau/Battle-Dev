import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'btd-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hidden = true;
  user: User;
  timesOut = true;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) { }

  display(timesOut: boolean){
    return this.hidden = timesOut;
  }

  ngOnInit(): void {
    this.display(this.hidden);

    this.route.paramMap.subscribe((param) => {
          const token = param.get('token');

          this.userService.setToken(token);

          this.userService.getCurrentUser().subscribe((user: User) => {
            console.log(user);
            this.user = user;
            this.router.navigateByUrl('/home');
          });
        });
      }

}
