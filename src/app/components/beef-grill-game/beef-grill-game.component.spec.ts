import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeefGrillGameComponent } from './beef-grill-game.component';

describe('BeefGrillGameComponent', () => {
  let component: BeefGrillGameComponent;
  let fixture: ComponentFixture<BeefGrillGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeefGrillGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeefGrillGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
