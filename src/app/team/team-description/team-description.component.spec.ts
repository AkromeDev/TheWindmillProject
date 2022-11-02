import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamDescriptionComponent } from './team-description.component';

describe('TeamDescriptionComponent', () => {
  let component: TeamDescriptionComponent;
  let fixture: ComponentFixture<TeamDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
