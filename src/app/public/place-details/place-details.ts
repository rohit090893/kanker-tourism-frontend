import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destination } from '../../services/destination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafePipe } from "../../pipes/safe-pipe";
import { HotelsPublic } from '../hotels/hotels';
import { Hotel } from '../../services/hotel';

@Component({
  selector: 'app-place-details',
  imports: [CommonModule, FormsModule, SafePipe],
  templateUrl: './place-details.html',
  styleUrl: './place-details.css',
})
export class PlaceDetails {

  place:any;
  selectedImage='';
  nearbyHotels:any[]=[];
  constructor(private route:ActivatedRoute,private destinationService:Destination, private hotelService:Hotel){

  }

  ngOnInit(){
    const id=this.route.snapshot.paramMap.get('id')!;
    this.destinationService.getById(id).subscribe(data=>{
      this.place=data;
      this.selectedImage=data.images?.[0];
      this.loadNearbyHotels(data.location);
    });
  }
  selectImage(img:string){
    this.selectedImage=img;
  }

  loadNearbyHotels(location:string){
    this.hotelService.getByLocation(location).subscribe(hotels=>{
      // this.nearbyHotels=hotels;
      this.nearbyHotels=hotels.map(h=>({
        ...h,distance:this.generateDistance()
      }));
    });
  }

  generateDistance():string{
    const km =(Math.random()*(5-0.5)+0.5).toFixed(1);
    return `${km} km away`;
  }

}
