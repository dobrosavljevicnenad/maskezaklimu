import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DostavaIPovracajComponent } from './dostava-i-povracaj.component';

describe('DostavaIPovracajComponent', () => {
  let component: DostavaIPovracajComponent;
  let fixture: ComponentFixture<DostavaIPovracajComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DostavaIPovracajComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DostavaIPovracajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
