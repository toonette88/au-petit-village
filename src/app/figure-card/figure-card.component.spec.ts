import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureCardComponent } from './figure-card.component';

describe('FigureCardComponent', () => {
  let component: FigureCardComponent;
  let fixture: ComponentFixture<FigureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FigureCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FigureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
