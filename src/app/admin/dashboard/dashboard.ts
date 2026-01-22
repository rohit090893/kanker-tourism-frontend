import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  stats={
    destinations:0,
    hotels:0,
    bookings:0,
    users:0
  };

  constructor(private auth:Auth){

  }

  ngOnInit(){
    this.stats={
      destinations:12,
      hotels:5,
      bookings:3,
      users:2
    };
  }

  logout(){
    this.auth.logout();
  }

}
