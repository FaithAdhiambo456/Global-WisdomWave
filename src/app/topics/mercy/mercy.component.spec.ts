import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercyComponent } from './mercy.component';

describe('MercyComponent', () => {
  let component: MercyComponent;
  let fixture: ComponentFixture<MercyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MercyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MercyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
