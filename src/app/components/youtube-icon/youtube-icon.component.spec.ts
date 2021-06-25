import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeIconComponent } from './youtube-icon.component';

describe('YoutubeIconComponent', () => {
  let component: YoutubeIconComponent;
  let fixture: ComponentFixture<YoutubeIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
