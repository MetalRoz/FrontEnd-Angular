import { Component, OnInit } from '@angular/core';
import { Aboutme } from '../models/aboutme';
import { AboutmeService } from '../service/aboutme.service';

@Component({
  selector: 'app-about-me-component',
  templateUrl: './about-me.component.component.html',
  styleUrls: ['./about-me.component.component.css']
})
export class AboutMeComponentComponent implements OnInit {

  sobremi: Aboutme[] = [];
  Aboutme: any;
  constructor(private aboutmeService: AboutmeService) { }

  ngOnInit(): void {
    this.cargarAboutme();
  }

  cargarAboutme(): void {
    this.aboutmeService.lista().subscribe(
      data => {
        this.sobremi = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
