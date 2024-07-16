import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolySpiritComponent } from './holy-spirit.component';

describe('HolySpiritComponent', () => {
  let component: HolySpiritComponent;
  let fixture: ComponentFixture<HolySpiritComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HolySpiritComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HolySpiritComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
