import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstrenosComponent } from './estrenos.component';

describe('EstrenosComponent', () => {
  let component: EstrenosComponent;
  let fixture: ComponentFixture<EstrenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstrenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
