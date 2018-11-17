import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, LoginAuth } from './user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

  public logedin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  readonly rootUrl = 'http://localhost:12000';

  constructor(private http: HttpClient) { }

  registerUser(user : User){   
    const body: User = {
      username: user.username,
      password: user.password,
      nickname: user.nickname,
      role: 'USER'
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/users/', body, {headers : reqHeader});
  }

  getUsers(){   
    return this.http.get(this.rootUrl + '/users/', {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }

  userAuthentication(username, password){   
  const body: LoginAuth = {
      username: username,
      password: password
    }
    return this.http.post(this.rootUrl + '/auth/', body, {
      headers: new HttpHeaders({'Content-Type':'application/json','No-Auth':'True'}),
      responseType: 'text'
   });
  }

  changeLoginStatus(flag : boolean){
    this.logedin.next(flag);
  }

  getLoginStatus(){
    return this.logedin.asObservable();
  }

}
