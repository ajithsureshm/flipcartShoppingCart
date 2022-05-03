import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  pswd = ""

  database: any = {
    "a@gmail.com": { uname: "a", email: "a@gmail.com", password: 1000 },
    "b@gmail.com": { uname: "b", email: "b@gmail.com", password: 1001 },
    "c@gmail.com": { uname: "c", email: "c@gmail.com", password: 1002 },



  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  emailChange(event: any) {
    this.email = event.target.value

  }
  pswdChange(event: any) {
    this.pswd = event.target.value
  }
  login() {


    var email = this.email
    var pswd = this.pswd
    var database = this.database
    if (email in database) {
      if (pswd == database[email].password) {
        // this.router.navigateByUrl('home')
      } else {
        alert("invalid password")
      }

    } else {
      alert("invaid email")
    }
  }

}
