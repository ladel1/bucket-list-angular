import { Component, Input, OnInit } from '@angular/core';
import { Wish } from 'src/app/models/wish';

@Component({
  selector: 'app-liste-wish',
  templateUrl: './liste-wish.component.html',
  styleUrls: ['./liste-wish.component.css']
})
export class ListeWishComponent implements OnInit {
  @Input() wishes:Wish[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
