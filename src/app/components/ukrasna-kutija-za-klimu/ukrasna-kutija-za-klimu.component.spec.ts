import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkrasnaKutijaZaKlimuComponent } from './ukrasna-kutija-za-klimu.component';

describe('UkrasnaKutijaZaKlimuComponent', () => {
  let component: UkrasnaKutijaZaKlimuComponent;
  let fixture: ComponentFixture<UkrasnaKutijaZaKlimuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UkrasnaKutijaZaKlimuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UkrasnaKutijaZaKlimuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
