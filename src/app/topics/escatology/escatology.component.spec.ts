import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscatologyComponent } from './escatology.component';

describe('EscatologyComponent', () => {
  let component: EscatologyComponent;
  let fixture: ComponentFixture<EscatologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EscatologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EscatologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
