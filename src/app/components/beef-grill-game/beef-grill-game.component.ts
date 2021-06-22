import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beef-grill-game',
  templateUrl: './beef-grill-game.component.html',
  styleUrls: ['./beef-grill-game.component.scss']
})
export class BeefGrillGameComponent implements OnInit {

  meatArray = [];

  constructor() { }

  ngOnInit(): void {
    this.initMeatArray();
  }

  initMeatArray(){
    this.meatArray = [
      { isFlipped: false },
      { isFlipped: false },
      { isFlipped: false },
    ]
  }

  onClickMeat(i){
    this.meatArray[i]['isFlipped'] = true;
  }
}
