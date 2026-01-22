import { ChangeDetectorRef, Component } from '@angular/core';
import { Hotel } from '../../services/hotel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotels',
  imports: [CommonModule,FormsModule],
  templateUrl: './hotels.html',
  styleUrl: './hotels.css',
})
export class HotelsPublic {
  hotels:any[]=[];
  constructor(private hotelService:Hotel, private cdr: ChangeDetectorRef){

  }

  ngOnInit(){
    this.hotelService.getAll().subscribe(data=>{
      this.hotels=data;
      console.log("Hoetsl are ",this.hotels);
      this.cdr.detectChanges();
    })
  }
}
