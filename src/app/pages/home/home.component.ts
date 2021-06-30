import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cssTheme: string;
  themeList: any;

  constructor() { }

  ngOnInit(): void {
    this.themeList = [
      'theme-blueberry',
      'theme-orange',
      'theme-tomato',
      'theme-cheese'
    ];
    this.checkThemeColor();
  }

  removeThemeList(){
    localStorage.removeItem('USED_THEME');
  }

  checkThemeColor(){
    let usedTheme = localStorage.getItem('USED_THEME');
    let newThemeList = undefined;
    let theme;

    if(usedTheme && JSON.parse(usedTheme).length >= 4){
      usedTheme = undefined;
      this.removeThemeList();
    }
    if(usedTheme){
      usedTheme = JSON.parse(usedTheme);
      newThemeList = this.themeList.filter(theme => !usedTheme.includes(theme));
    }
    if(newThemeList){
      theme = newThemeList[Math.floor(Math.random() * newThemeList.length)];
    }else{
      theme = this.themeList[Math.floor(Math.random() * this.themeList.length)]; 
    }
    
    this.setThemeColor(theme);
  }

  setThemeColor(theme){
    let themeList: any = localStorage.getItem('USED_THEME');
    let themeArray = [];

    if(themeList){
      themeArray = JSON.parse(themeList);
    }

    themeArray.push(theme);
    localStorage.setItem('USED_THEME', JSON.stringify(themeArray));
    this.cssTheme = theme;
  }

}
