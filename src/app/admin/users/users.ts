import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-users',
  imports: [FormsModule,CommonModule],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit{
  formData :any={};
  userData:any=[];
  isAdmin = true;
  constructor(private userService:User){

  }

  ngOnInit(){
    this.getUsers();
  }

  createUser(){
    this.userService.createUser(this.formData).subscribe({
      next:(res)=>{
        console.log('user created',res);
        this.getUsers();
        this.formData={
          name:'',
          email:'',
          password:''
        };
      },
      error:(err)=>{
        console.error('Error',err.error);
      }
    })
  }

  getUsers(){
    this.userService.getAllUsers().subscribe(data=>{
      this.userData=data;
      console.log(data);

    });
  }

}
