import { Component } from '@angular/core';
import { WebInfo } from './entity/enum/web-info.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = WebInfo.websiteName;
}
