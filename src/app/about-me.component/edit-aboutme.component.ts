import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Aboutme } from '../models/aboutme';
import { AboutmeService } from '../service/aboutme.service';

@Component({
  selector: 'app-edit-aboutme',
  templateUrl: './edit-aboutme.component.html',
  styleUrls: ['./edit-aboutme.component.css']
})
export class EditAboutmeComponent implements OnInit {

  sobremi: Aboutme = null;

  constructor(
    private aboutmeService: AboutmeService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router:Router
    ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    alert(id);
  }

}
