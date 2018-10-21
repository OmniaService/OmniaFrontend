import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
user: User;

  constructor(private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.user =new User();
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.user={
      username: '',
      password: '',
      nickname: '',
      role: 'USER'
    }
  }

  OnSubmit(form : NgForm){
    this.userService.registerUser(form.value)
    .subscribe((data: any) => {
      if(data.key !== ''){
        this.resetForm(form);
        this.toastr.success('User registration successful!');
      }
    }, (error: any) => {
      this.toastr.error('Registration failed');
    });
  }

}
