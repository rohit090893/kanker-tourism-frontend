import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Hotel {
  // private api="http://localhost:5000/api/hotels";
  private api = 'https://kanker-tourism-backend.onrender.com/api/hotels';
  constructor(private http:HttpClient){

  }

  getAll(){
    return this.http.get<any[]>(this.api);
  }

  create(formData:FormData){
    return this.http.post(this.api,formData);
  }

  delete(id:string){
    return this.http.delete(`${this.api}/${id}`);
  }

  getByLocation(location:string){
    return this.http.get<any[]>(
      `${this.api}?location=${encodeURIComponent(location)}`
    );
  }

}
