import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BollywoodAddComponent } from './bollywood-add.component';

describe('BollywoodAddComponent', () => {
  let component: BollywoodAddComponent;
  let fixture: ComponentFixture<BollywoodAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BollywoodAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BollywoodAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
