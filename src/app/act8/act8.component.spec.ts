import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Act8Component } from './act8.component';

describe('Act8Component', () => {
  let component: Act8Component;
  let fixture: ComponentFixture<Act8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Act8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Act8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
