import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Act6Component } from './act6.component';

describe('Act6Component', () => {
  let component: Act6Component;
  let fixture: ComponentFixture<Act6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Act6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Act6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
