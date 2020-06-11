import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Act5Component } from './act5.component';

describe('Act5Component', () => {
  let component: Act5Component;
  let fixture: ComponentFixture<Act5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Act5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Act5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
