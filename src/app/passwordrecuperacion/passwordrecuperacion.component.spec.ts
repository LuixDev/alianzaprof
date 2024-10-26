import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordrecuperacionComponent } from './passwordrecuperacion.component';

describe('PasswordrecuperacionComponent', () => {
  let component: PasswordrecuperacionComponent;
  let fixture: ComponentFixture<PasswordrecuperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordrecuperacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordrecuperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
