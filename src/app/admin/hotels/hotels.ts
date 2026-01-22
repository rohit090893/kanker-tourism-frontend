import { Component } from '@angular/core';
import { Hotel } from '../../services/hotel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotels',
  imports: [FormsModule, CommonModule],
  templateUrl: './hotels.html',
  styleUrl: './hotels.css',
})
export class Hotels {

  hotels:any[]=[];
  form:any={};
  images:File[]=[];
  constructor(private hotelService:Hotel){

  }

  ngOnInit(){
    this.loadHotels();
  }


  saveHotel(){
    const fd=new FormData();
    console.log("FOrm dtaa",fd);
    Object.keys(this.form).forEach(key=>{
      fd.append(key,this.form[key]);
    })
    this.images.forEach(img=>fd.append('images',img));
    this.hotelService.create(fd).subscribe(()=>{
      this.form={};
      this.images=[];
      this.loadHotels();
    })
  }

  loadHotels(){
    this.hotelService.getAll().subscribe(data=>{
      this.hotels=data;
    });
  }
  onFileChange(event:any){
    this.images=Array.from(event.target.files);
  }

  deleteHotel(id:string){
    if(confirm('Delete this hotel?')){
      this.hotelService.delete(id).subscribe(()=>{
        this.loadHotels();
      });
    }
  }

}
