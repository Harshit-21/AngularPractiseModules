import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HollywoodViewComponent } from './hollywood-view.component';

describe('HollywoodViewComponent', () => {
  let component: HollywoodViewComponent;
  let fixture: ComponentFixture<HollywoodViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HollywoodViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HollywoodViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
