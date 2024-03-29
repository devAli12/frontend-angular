import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentUpdatedPopupComponent } from './adherent-updated-popup.component';

describe('AdherentUpdatedPopupComponent', () => {
  let component: AdherentUpdatedPopupComponent;
  let fixture: ComponentFixture<AdherentUpdatedPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdherentUpdatedPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdherentUpdatedPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
