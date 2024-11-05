import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatallasMayoComponent } from './batallas-mayo.component';

describe('BatallasMayoComponent', () => {
  let component: BatallasMayoComponent;
  let fixture: ComponentFixture<BatallasMayoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BatallasMayoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BatallasMayoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
