import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCarousalComponent } from './movie-carousal.component';

describe('MovieCarousalComponent', () => {
  let component: MovieCarousalComponent;
  let fixture: ComponentFixture<MovieCarousalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCarousalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieCarousalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
