import { ChangeDetectorRef, Component } from '@angular/core';
import { Destination } from '../../services/destination';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-destinations',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css',
})
export class DestinationsPublic {
  destinations:any[]=[];

  constructor(private destinationService:Destination,private cdr: ChangeDetectorRef){

  }

  ngOnInit(){
    this.destinationService.getAll().subscribe({
    next: (data) => {
      console.log('RAW API RESPONSE:', data);
      console.log('Type:', typeof data);
      console.log('Is Array:', Array.isArray(data));

      this.destinations = data || [];
      this.cdr.detectChanges();
    },
    error: (err) => {
      console.error('API ERROR:', err);
    }
  });
  }



}
