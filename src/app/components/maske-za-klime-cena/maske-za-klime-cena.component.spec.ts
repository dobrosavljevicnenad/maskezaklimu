import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskeZaKlimeCenaComponent } from './maske-za-klime-cena.component';

describe('MaskeZaKlimeCenaComponent', () => {
  let component: MaskeZaKlimeCenaComponent;
  let fixture: ComponentFixture<MaskeZaKlimeCenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaskeZaKlimeCenaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaskeZaKlimeCenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
