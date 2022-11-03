import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsCollectionComponent } from './facts-collection.component';

describe('FactsCollectionComponent', () => {
  let component: FactsCollectionComponent;
  let fixture: ComponentFixture<FactsCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactsCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
