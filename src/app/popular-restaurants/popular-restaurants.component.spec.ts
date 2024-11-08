import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularRestaurantsComponent } from './popular-restaurants.component';

describe('PopularRestaurantsComponent', () => {
  let component: PopularRestaurantsComponent;
  let fixture: ComponentFixture<PopularRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularRestaurantsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
