import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeWishComponent } from './liste-wish.component';

describe('ListeWishComponent', () => {
  let component: ListeWishComponent;
  let fixture: ComponentFixture<ListeWishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeWishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeWishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
