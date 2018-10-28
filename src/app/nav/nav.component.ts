import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  Logout() {
    localStorage.removeItem("Token");
    this.router.navigate(['/login']);
  }

  getLogedin(){
    if(localStorage.getItem('Token') !== null){
      return true;
    }
    return false;
  }

}
