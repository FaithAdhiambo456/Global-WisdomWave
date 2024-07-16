import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingdomOfGodComponent } from './kingdom-of-god.component';

describe('KingdomOfGodComponent', () => {
  let component: KingdomOfGodComponent;
  let fixture: ComponentFixture<KingdomOfGodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KingdomOfGodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KingdomOfGodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
