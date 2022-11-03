import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeriseComponent } from './exerise.component';

describe('ExeriseComponent', () => {
  let component: ExeriseComponent;
  let fixture: ComponentFixture<ExeriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ExeriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExeriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
