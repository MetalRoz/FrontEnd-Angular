import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.component.html',
  styleUrls: ['./header.component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  Router(){
    this.router.navigate(["login"])
  }

}
