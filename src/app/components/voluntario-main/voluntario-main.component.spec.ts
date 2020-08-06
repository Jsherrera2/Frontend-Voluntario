import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntarioMainComponent } from './voluntario-main.component';

describe('VoluntarioMainComponent', () => {
  let component: VoluntarioMainComponent;
  let fixture: ComponentFixture<VoluntarioMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntarioMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntarioMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
