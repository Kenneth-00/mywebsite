import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  [x: string]: any;

  Currentnav: string = '';
  constructor(private routes: Router) { }

  ngOnInit(): void {
  }
  newClass(current:string){

    this.Currentnav = current;
    this.route.navigateByurl('/personal-profile')
  }
}
