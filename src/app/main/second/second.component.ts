import { Component, OnInit } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private cardService: CardComponent) { }

  ngOnInit(): void {
  }

  // public initialList = this.cardService.initialList;
}
