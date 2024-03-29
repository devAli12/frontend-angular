import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePopupFormationComponent } from './update-popup-formation.component';

describe('UpdatePopupFormationComponent', () => {
  let component: UpdatePopupFormationComponent;
  let fixture: ComponentFixture<UpdatePopupFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePopupFormationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePopupFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
