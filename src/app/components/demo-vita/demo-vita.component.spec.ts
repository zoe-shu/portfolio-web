import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoVitaComponent } from './demo-vita.component';

describe('DemoVitaComponent', () => {
  let component: DemoVitaComponent;
  let fixture: ComponentFixture<DemoVitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoVitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoVitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
