import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Act9Component } from './act9.component';

describe('Act9Component', () => {
  let component: Act9Component;
  let fixture: ComponentFixture<Act9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Act9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Act9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
