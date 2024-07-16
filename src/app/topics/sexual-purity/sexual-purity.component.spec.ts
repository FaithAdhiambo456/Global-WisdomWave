import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SexualPurityComponent } from './sexual-purity.component';

describe('SexualPurityComponent', () => {
  let component: SexualPurityComponent;
  let fixture: ComponentFixture<SexualPurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SexualPurityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SexualPurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
