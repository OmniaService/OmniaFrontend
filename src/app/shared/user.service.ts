import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User, LoginAuth } from './user.model';

@Injectable()
export class UserService {

  readonly rootUrl = 'http://localhost:12000';

  constructor(private http: HttpClient) { }

  registerUser(user : User){   
    const body: User = {
      username: user.username,
      password: user.password,
      nickname: user.nickname,
      role: "USER"
    }
    return this.http.post(this.rootUrl + '/auth/save/', body);
  }
  userAuthentication(username, password){   
  const body: LoginAuth = {
      username: username,
      password: password
    }
    return this.http.post(this.rootUrl + '/auth', body);
  }
}
