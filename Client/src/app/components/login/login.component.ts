import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user_email: any = '';
  user_password: any = '';
  error: any = '';
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }
  emptyErr() {
    this.error = '';
  }
  login() {
    if (this.user_email != '' && this.user_password != '') {
      let user = {
        user_email: this.user_email,
        user_password: this.user_password
      }
      this.authService.login(user).then((response: any) => {

        localStorage.setItem('user_name', response.user.user_name)
        console.log(response)
        if (response.message != "") {
          this.error = response.message;
          console.log('intra aici')
        } else {
          console.log('intra aici2')

          this.router.navigate(['/employees'])
        }
      })
    }
    else {
      this.error = 'These fields are required'
    }

  }
}
