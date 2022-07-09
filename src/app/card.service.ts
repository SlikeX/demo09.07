import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ICard } from './icard';

@Injectable({
  providedIn: 'root'
})
export class CardService implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public cardList = new BehaviorSubject<ICard[]>(
    [
      {title:'car',
      colorTitle: 'red',
      color: 'red',
      group: 'first',
      shape: 'shere'
      },
      {title:'table',
      colorTitle: 'blue',
      color: 'blue',
      group: 'second',
      shape: 'square'
      },
      {title:'window',
      colorTitle: 'green',
      color: 'green',
      group: 'third',
      shape: 'triang'
      },
      {title:'car',
      colorTitle: 'red',
      color: 'red',
      group: 'first',
      shape: 'shere'
      },
      {title:'table',
      colorTitle: 'blue',
      color: 'blue',
      group: 'second',
      shape: 'square'
      },
      {title:'window',
      colorTitle: 'green',
      color: 'green',
      group: 'third',
      shape: 'triang'
      },
      {title:'car',
      colorTitle: 'red',
      color: 'red',
      group: 'first',
      shape: 'shere'
      },
      {title:'table',
      colorTitle: 'blue',
      color: 'blue',
      group: 'second',
      shape: 'square'
      },
      {title:'window',
      colorTitle: 'green',
      color: 'green',
      group: 'third',
      shape: 'triang'
      },
      {title:'car',
      colorTitle: 'red',
      color: 'red',
      group: 'first',
      shape: 'shere'
      },
      {title:'table',
      colorTitle: 'blue',
      color: 'blue',
      group: 'second',
      shape: 'square'
      },
      {title:'window',
      colorTitle: 'green',
      color: 'green',
      group: 'third',
      shape: 'triang'
      }
    ]
  );

  public filterByTitile(title: string): void{
    const filtered = this.cardList.subscribe()
    console.log(title)
  }
}
