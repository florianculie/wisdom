import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingLogButtonComponent } from './floating-log-button.component';

describe('FloatingLogButtonComponent', () => {
  let component: FloatingLogButtonComponent;
  let fixture: ComponentFixture<FloatingLogButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingLogButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatingLogButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
