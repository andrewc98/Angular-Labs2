import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string ='';
  password:string ='';
  constructor(private router:Router, private form:FormsModule) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    if (this.username == "Andrew" && this.password == "abc"){
      this.router.navigateByUrl('/account')

      // --- Session Storage Start
      if (typeof(Storage) !== "undefined") {
        console.log('Storage Ready');
        sessionStorage.setItem("user id", "1");
        sessionStorage.setItem("username", this.username);
        sessionStorage.setItem("dob", "January 1 2000 00:00");
        sessionStorage.setItem("age", "18");
        console.log(sessionStorage.getItem("dob"));
      }
      // --- Session Storage End

    } else {
      alert('No Bueno')
    }
  }
}
