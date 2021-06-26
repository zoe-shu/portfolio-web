import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoLancomeFireworksComponent } from './demo-lancome-fireworks.component';

describe('DemoLancomeFireworksComponent', () => {
  let component: DemoLancomeFireworksComponent;
  let fixture: ComponentFixture<DemoLancomeFireworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoLancomeFireworksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoLancomeFireworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
