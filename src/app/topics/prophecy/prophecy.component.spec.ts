import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProphecyComponent } from './prophecy.component';

describe('ProphecyComponent', () => {
  let component: ProphecyComponent;
  let fixture: ComponentFixture<ProphecyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProphecyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProphecyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
