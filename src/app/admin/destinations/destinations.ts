import { Component } from '@angular/core';
import { Destination } from '../../services/destination';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-destinations',
  imports: [CommonModule,FormsModule],
  templateUrl: './destinations.html',
  styleUrl: './destinations.css',
})
export class Destinations {
  destinations:any[] = [];
  form:any = {};
  images:any;

  constructor(private service: Destination) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getAll().subscribe(data => this.destinations = data);
  }

  onFileChange(e:any) {
    this.images = e.target.files;
  }

  save() {
    const fd = new FormData();
    Object.keys(this.form).forEach(k => fd.append(k, this.form[k]));
    for (let img of this.images) fd.append('images', img);

    this.service.create(fd).subscribe(() => {
      this.form = {};
      this.load();
    });
  }
}
