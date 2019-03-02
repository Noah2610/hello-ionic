import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentPage } from './my-component.page';

describe('MyComponentPage', () => {
  let component: MyComponentPage;
  let fixture: ComponentFixture<MyComponentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
