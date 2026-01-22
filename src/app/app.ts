import { Component, signal } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { Header } from "./public/layout/header/header";
import { Footer } from "./public/layout/footer/footer";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
  constructor(public router:Router){
    //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  isAdmin(){
    return this.router.url.startsWith('/admin')||this.router.url=='/login';
  }
}
