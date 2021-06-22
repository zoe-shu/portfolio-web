import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
  providers: [NgbCarouselConfig]
})
export class WorksComponent implements OnInit {
  @ViewChild('itemSlide') itemSlide: NgbCarousel;

  isShowSlide: boolean = false;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 1000;
    config.wrap = true; //loop
    config.animation = false;
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    this.itemSlide.pause();
  }

  public selectItem(itemId){
    this.itemSlide.select(itemId);
  }

  onClickClose(){
    this.hideSlide();
  }

  public hideSlide(){
    this.isShowSlide = false;
  }

  public showSlide(){
    this.isShowSlide = true;
  }
}
