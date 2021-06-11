import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSpareComponent } from './detail-spare.component';

describe('DetailSpareComponent', () => {
  let component: DetailSpareComponent;
  let fixture: ComponentFixture<DetailSpareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailSpareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSpareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
