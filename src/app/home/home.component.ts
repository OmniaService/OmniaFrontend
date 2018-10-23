import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users : User[];
  constructor(private router : Router, private userService : UserService) { }

  ngOnInit() {
    this.userService.getUsers()
    .subscribe((data : any) => {
      this.users = data;
    });
  }

  Logout(){
    localStorage.removeItem("Token");
    this.router.navigate(['/login']);
  }

}
