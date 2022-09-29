import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterWishComponent } from './ajouter-wish.component';

describe('AjouterWishComponent', () => {
  let component: AjouterWishComponent;
  let fixture: ComponentFixture<AjouterWishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterWishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
