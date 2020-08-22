import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Blank2Component } from './blank2.component';

describe('Blank2Component', () => {
  let component: Blank2Component;
  let fixture: ComponentFixture<Blank2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Blank2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Blank2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
