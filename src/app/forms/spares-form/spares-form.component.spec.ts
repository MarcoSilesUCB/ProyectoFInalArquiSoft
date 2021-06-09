import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparesFormComponent } from './spares-form.component';

describe('SparesFormComponent', () => {
  let component: SparesFormComponent;
  let fixture: ComponentFixture<SparesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
