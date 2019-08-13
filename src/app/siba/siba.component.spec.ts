import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SibaComponent } from './siba.component';

describe('SibaComponent', () => {
  let component: SibaComponent;
  let fixture: ComponentFixture<SibaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SibaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SibaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
