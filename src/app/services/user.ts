import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class User {

  // private api='http://localhost:5000/api/users';
  private api = 'https://kanker-tourism-backend.onrender.com/api/users';
  constructor(private http:HttpClient){

  }

  createUser(data:any){
    return this.http.post(this.api,data);
  }
  getAllUsers(){
    return this.http.get<any[]>(this.api);
  }
}
