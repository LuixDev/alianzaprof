import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatallasFuertesComponent } from './batallas-fuertes.component';

describe('BatallasFuertesComponent', () => {
  let component: BatallasFuertesComponent;
  let fixture: ComponentFixture<BatallasFuertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatallasFuertesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatallasFuertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
