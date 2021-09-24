import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeImageLoaderComponent } from './awesome-image-loader.component';

describe('AwesomeImageLoaderComponent', () => {
  let component: AwesomeImageLoaderComponent;
  let fixture: ComponentFixture<AwesomeImageLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwesomeImageLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwesomeImageLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
