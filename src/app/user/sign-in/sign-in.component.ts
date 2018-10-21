import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService,private router : Router, private toastr : ToastrService) { }

  ngOnInit() {
  }

  OnSubmit(username, password){
    this.userService.userAuthentication(username, password)
    .subscribe((data: any) => {
        localStorage.setItem('Token',data);
        this.router.navigate(['/home']);
        this.toastr.success('User login successful!');
    }, (err : HttpErrorResponse) => {
      this.toastr.error('Login failed');
    });
  }

}
