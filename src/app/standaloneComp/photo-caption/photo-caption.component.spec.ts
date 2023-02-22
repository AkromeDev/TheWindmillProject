import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCaptionComponent } from './photo-caption.component';

describe('PhotoCaptionComponent', () => {
  let component: PhotoCaptionComponent;
  let fixture: ComponentFixture<PhotoCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PhotoCaptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
