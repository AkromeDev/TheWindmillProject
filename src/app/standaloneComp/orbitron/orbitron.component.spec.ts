import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrbitronComponent } from './orbitron.component';

describe('OrbitronComponent', () => {
  let component: OrbitronComponent;
  let fixture: ComponentFixture<OrbitronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ OrbitronComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrbitronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
