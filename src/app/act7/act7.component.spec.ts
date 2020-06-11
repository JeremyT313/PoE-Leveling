import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Act7Component } from './act7.component';

describe('Act7Component', () => {
  let component: Act7Component;
  let fixture: ComponentFixture<Act7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Act7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Act7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
