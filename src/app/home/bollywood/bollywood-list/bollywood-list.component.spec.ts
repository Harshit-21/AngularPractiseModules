import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BollywoodListComponent } from './bollywood-list.component';

describe('BollywoodListComponent', () => {
  let component: BollywoodListComponent;
  let fixture: ComponentFixture<BollywoodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BollywoodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BollywoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
