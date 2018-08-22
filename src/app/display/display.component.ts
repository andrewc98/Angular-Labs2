import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display',
  template: "<p>This old thing</p>",
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private router:Router) { }
  // details:string = sessionStorage.getItem("age");
  id:string = sessionStorage.getItem("user id");
  name:string = sessionStorage.getItem("username");
  dob:string = sessionStorage.getItem("dob");
  age:string = sessionStorage.getItem("age");

  ngOnInit() {
    console.log(sessionStorage.getItem("username"));
  }

  clearCookies() {
    sessionStorage.removeItem("user id");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("dob");
    sessionStorage.removeItem("age");
    this.router.navigateByUrl('/login')
  }

}
