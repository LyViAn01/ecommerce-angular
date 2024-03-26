import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginForm, RegisterForm, User } from './auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated: boolean=false
  isloading: boolean=false
  private URl = 'http://localhost:3000/user'

  constructor(private router: Router, private http: HttpClient) { }
  
  login(form: LoginForm) {
    this.http.get<User[]>(this.URl).subscribe(users => {
      const user = users.find(user => user.email == form.email && user.password == form.password);
      if(user){
        this.isAuthenticated=true
        this.router.navigate([''])
      }
      else{
        alert('login not success')
        this.isAuthenticated=false
      }
    });
  }
  
  register(form: RegisterForm) {
    if(form.password!=form.comfirm_password) {
      return
    }
    else{
      this.http.post(this.URl, form).subscribe(() => {
        this.router.navigate(['login'])
        this.isAuthenticated=true
      });
    }
  }
  logout() {
    this.router.navigate(['login'])
    this.isAuthenticated=false
  }
}
