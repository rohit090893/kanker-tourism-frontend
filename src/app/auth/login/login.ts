import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email='';
  password='';
  error='';
  constructor(private auth:Auth){

  }


  login(){
    this.auth.login(this.email,this.password).subscribe({
      next:(res:any)=>{
        this.auth.saveToken(res.token);
        window.location.href='/admin';
      },
      error:()=>{
        this.error='Invalid credentials';
      }
    });
  }



}
