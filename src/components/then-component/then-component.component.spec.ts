import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThenComponentComponent } from './then-component.component';

describe('ThenComponentComponent', () => {
  let component: ThenComponentComponent;
  let fixture: ComponentFixture<ThenComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThenComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThenComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
