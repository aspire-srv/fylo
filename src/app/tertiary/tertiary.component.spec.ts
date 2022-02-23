import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TertiaryComponent } from './tertiary.component';

describe('TertiaryComponent', () => {
  let component: TertiaryComponent;
  let fixture: ComponentFixture<TertiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TertiaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TertiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
