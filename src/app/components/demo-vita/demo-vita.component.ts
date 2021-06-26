import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-vita',
  templateUrl: './demo-vita.component.html',
  styleUrls: ['./demo-vita.component.scss']
})
export class DemoVitaComponent implements OnInit {
  isMove: boolean = true;
  isDisplayLink: boolean = false;
  firstOpacity: boolean = false;
  secondOpacity: boolean = false;
  isFlash: boolean = true;
  isAnimated: boolean = false;
  isBodyCenter: boolean = false;
  isDisableReplay: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  public resetAnimation(){
    this.isMove = true;
    this.isAnimated = false;
    this.firstOpacity = false;
    this.secondOpacity = false;
    this.isFlash = false;
    this.isDisplayLink = false;
    this.isBodyCenter = false;
  }

  public playAnimation(){
    if(!this.isDisableReplay){
      this.isDisableReplay = true;
      setTimeout(() => {
        this.initAnimation();
      }, 1000);
    }
  }

  private initAnimation(){
    this.isMove = false;
    this.isAnimated = true;

    setTimeout(() => {
      this.firstOpacity = true;
    }, 1000);

    setTimeout(() => {
      this.secondOpacity = true;
      this.isFlash = true;
      this.isDisplayLink = true;
      this.isBodyCenter = true;
    }, 2500);

    setTimeout(() => {
      this.isDisableReplay = false;
    }, 3000);
  }

  public requestPlay(){
    this.resetAnimation();
    this.playAnimation();
  }
}
