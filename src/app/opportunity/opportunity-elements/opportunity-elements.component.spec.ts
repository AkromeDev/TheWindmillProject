import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityElementsComponent } from './opportunity-elements.component';

describe('OpportunityElementsComponent', () => {
  let component: OpportunityElementsComponent;
  let fixture: ComponentFixture<OpportunityElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpportunityElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
