import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  // private api='http://localhost:5000/api/auth';
  private api = 'https://kanker-tourism-backend.onrender.com/api/auth';
  constructor(private http:HttpClient){

  }

  login(email:string,password:string):Observable<any>{
    return this.http.post(this.api+'/login',{
      email,password
    });
  }

  saveToken(token:string){
    localStorage.setItem('token',token);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    window.location.href='/login';
  }

  isLoggedIn():boolean{
    return !!this.getToken();
  }

}
