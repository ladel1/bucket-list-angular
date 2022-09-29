import { Component } from '@angular/core';
import { Wish } from './models/wish';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  wishes:Wish[]=[];
  

}
