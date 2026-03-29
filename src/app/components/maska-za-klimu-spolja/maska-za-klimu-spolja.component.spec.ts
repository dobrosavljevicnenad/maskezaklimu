import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskaZaKlimuSpoljaComponent } from './maska-za-klimu-spolja.component';

describe('MaskaZaKlimuSpoljaComponent', () => {
  let component: MaskaZaKlimuSpoljaComponent;
  let fixture: ComponentFixture<MaskaZaKlimuSpoljaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaskaZaKlimuSpoljaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaskaZaKlimuSpoljaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
