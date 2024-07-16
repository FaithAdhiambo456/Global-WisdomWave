import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvationComponent } from './salvation.component';

describe('SalvationComponent', () => {
  let component: SalvationComponent;
  let fixture: ComponentFixture<SalvationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalvationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalvationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
