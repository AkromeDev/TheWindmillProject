import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsDescriptionComponent } from './goals-description.component';

describe('GoalsDescriptionComponent', () => {
  let component: GoalsDescriptionComponent;
  let fixture: ComponentFixture<GoalsDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalsDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
