import { Component, OnInit, ViewChild } from '@angular/core';
declare let gtag: Function;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  
})
export class ProfileComponent implements OnInit {
  @ViewChild('worksComponent', {static: true}) worksComponent;
  
  dotList: any;

  constructor(){}

  ngOnInit() {
    this.worksComponent.hideSlide();
    this.dotList = [
      'prudential-mov',
      'lancome-firework-mov',
      'lancome-fridge-mov',
      'ifc-xmas-mov',
      'ifc-xmas-send-mov',
      'shiseido-billboard-mov',
      'hennessy-mov',
      'hennessy-write-img',
      'hennessy-preview-img',
      'vita-mov'
    ];
  }

  onClickDot(itemId){    
    this.worksComponent.selectItem(itemId);
    this.worksComponent.showSlide();
    // gtag('send', 'view_item', itemId);
  }

}
