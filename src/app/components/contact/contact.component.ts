import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  isOpenSkillSet: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.closeSkillSet();
  }

  openSkillSet(){
    this.isOpenSkillSet = true;
  }
  
  closeSkillSet(){
    this.isOpenSkillSet = false;
  }
}
