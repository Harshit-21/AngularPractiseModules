import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HollywoodAddComponent } from './hollywood-add.component';

describe('HollywoodAddComponent', () => {
  let component: HollywoodAddComponent;
  let fixture: ComponentFixture<HollywoodAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HollywoodAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HollywoodAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
