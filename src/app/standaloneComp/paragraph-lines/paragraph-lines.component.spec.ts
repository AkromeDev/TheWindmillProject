import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphLinesComponent } from './paragraph-lines.component';

describe('ParagraphLinesComponent', () => {
  let component: ParagraphLinesComponent;
  let fixture: ComponentFixture<ParagraphLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ParagraphLinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParagraphLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
