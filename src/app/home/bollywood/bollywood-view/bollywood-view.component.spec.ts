import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BollywoodViewComponent } from './bollywood-view.component';

describe('BollywoodViewComponent', () => {
  let component: BollywoodViewComponent;
  let fixture: ComponentFixture<BollywoodViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BollywoodViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BollywoodViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
