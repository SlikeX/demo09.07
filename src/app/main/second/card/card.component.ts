import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private cardServise: CardService) { }

  ngOnInit(): void {
    console.log(this.cardList)
  }

  public cardList = this.cardServise.cardList;
}
