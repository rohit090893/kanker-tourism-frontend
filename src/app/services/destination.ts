import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Destination {
  // api='http://localhost:5000/api/destinations';
  private api = 'https://kanker-tourism-backend.onrender.com/api/destinations';
  constructor(private http:HttpClient){

  }

  getAll(){
    return this.http.get<any[]>(this.api);

  }
  create(formData:FormData){
    return this.http.post(this.api,formData);
  }

  getById(id:string){
    return this.http.get<any>(`${this.api}/${id}`);
  }


}


