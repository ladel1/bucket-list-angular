import { Component, OnInit } from '@angular/core';
import { Wish } from 'src/app/models/wish';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  wishes:Wish[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
