import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarVoluntarioComponent } from './nav-bar-voluntario.component';

describe('NavBarVoluntarioComponent', () => {
  let component: NavBarVoluntarioComponent;
  let fixture: ComponentFixture<NavBarVoluntarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarVoluntarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
