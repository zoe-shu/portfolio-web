import { Component, Input, OnInit, ViewChild } from '@angular/core';
declare let gtag: Function;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  
})
export class ProfileComponent implements OnInit {
  @ViewChild('worksComponent', {static: true}) worksComponent;
  @Input() cssTheme: string;

  isBBTheme: boolean;
  dotList: any;
  workContent: any;

  constructor(){}

  ngOnInit() {
    this.isBBTheme = this.cssTheme == 'theme-blueberry' ? true : false;
    this.initWorkItem();
    this.worksComponent.hideSlide();
  }

  onClickDot(itemId){    
    this.worksComponent.selectItem(itemId);
    this.worksComponent.showSlide();
    if(itemId == this.dotList[9]){
      setTimeout(() => {
        this.worksComponent.playVita();
      }, 1000);
    }
    // gtag('send', 'view_item', itemId);
  }

  private initWorkItem(){
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
      'vita-mov',
      'playground'
    ];
    this.workContent = [
      {
        id: this.dotList[0],
        description: 'Technology: Use RasperryPi to collect user riding data from the bicycle ;<br>text animation match with the background video',
        url: 'https://www.youtube.com/embed/34wAUmQ41mw',
        isYoutube: true,
        images: [
          {
            description: '',
            src: '../../assets/img/prudential-venue.jpg',
          },
          {
            description: '',
            src: '../../assets/img/prudential-board.jpg',
          },
          {
            description: '',
            src: '../../assets/img/prudential-share.jpg'
          }
        ]
      },
      {
        id: this.dotList[2],
        description: 'Technology: CCS Animation match with the background video ; Virtual Keyboard ; Color tunning for transparent screen',
        url: 'https://www.youtube.com/embed/1akgwQbqAAg',
        isYoutube: true,
        images: [
          {
            description: '',
            src: '../../assets/img/lancome_fridge_play.jpg',
          },
          {
            description: '',
            src: '../../assets/img/lancome_fridge.jpg',
          }
        ]
      },
      {
        id: this.dotList[3],
        description: 'Technology: Using Tensorflow.js to identify the e-postcard graphic, for player to send the e-postcard by email.',
        url: 'https://www.youtube.com/embed/p3zdIQqmEgE',
        isYoutube: true,
        images: [
          {
            description: '',
            src: '../../assets/img/ifc_xmas_card.jpg',
          },
          {
            description: '',
            src: '../../assets/img/ifc_xmas_scan.jpg',
          }
        ]
      },
      {
        id: this.dotList[4],
        description: 'Technology: CSS Animation ; Virtual Keyboard ; Use RasperryPi to turn on the light after e-postcard sent',
        url: 'https://www.youtube.com/embed/bB15gm98gHM',
        isYoutube: true,
        images: [
          {
            description: '',
            src: '../../assets/img/ifc_xmas_form.jpeg',
          },
          {
            description: '',
            src: '../../assets/img/ifc_xmas_send.png',
          },
          {
            description: '',
            src: '../../assets/img/ifc_xmas_light.png',
          }
        ]
      },
      {
        id: this.dotList[5],
        description: 'Technology: Neon style frame & text, spotlight animation',
        url: 'https://www.youtube.com/embed/QBzS9IlVdrA',
        isYoutube: true,
        images: [
          {
            description: '',
            src: '../../assets/img/shiseido_billboard.jpg',
          }
        ]
      },
      {
        id: this.dotList[6],
        description: 'Technology: CSS Animation (coin flipping, zoom in to specific zone, random item)',
        url: 'https://www.youtube.com/embed/wGHLBvfJvoQ',
        isYoutube: true,
        images: [
          {
            description: '',
            border: true,
            src: '../../assets/img/hennessy_play.png',
          }
        ]
      },
      {
        id: this.dotList[7],
        description: 'After user got the item from wishing pool, they can write an e-postcard with the blessing message from the item.',
        url: '',
        isYoutube: false,
        images: [
          {
            description: '',
            src: '../../assets/img/hennessy_write.png',
          }
        ]
      },
      {
        id: this.dotList[8],
        description: 'Technology: Capture finished postcard, re-scalling the last element for preview',
        url: '',
        isYoutube: false,
        images: [
          {
            description: '',
            src: '../../assets/img/hennessy_preview.jpg',
          }
        ]
      },
      {
        id: this.dotList[10],
        description: 'The UI desgin of this website. <br>Changing theme color for every visit.',
        url: '',
        isYoutube: false,
        images: [
          {
            description: '',
            border: true,
            src: '../../assets/img/playground/blueberry_mobile.png',
          },
          {
            description: '',
            border: true,
            src: '../../assets/img/playground/blueberry_desktop.png',
          },
          {
            description: '',
            border: true,
            src: '../../assets/img/playground/orange_desktop.png',
          },
          {
            description: '',
            border: true,
            src: '../../assets/img/playground/orange_mobile.png',
          },
          {
            description: '',
            border: true,
            src: '../../assets/img/playground/cheese_mobile.png',
          },
          {
            description: '',
            border: true,
            src: '../../assets/img/playground/cheese_desktop.png',
          },
          {
            description: '',
            border: true,
            src: '../../assets/img/playground/tomato_desktop.png',
          },
          {
            description: '',
            border: true,
            src: '../../assets/img/playground/tomato_mobile.png',
          },
        ]
      },
    ];

  }
}
