import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TippytestComponent } from './tippytest.component';

describe('TippytestComponent', () => {
  let component: TippytestComponent;
  let fixture: ComponentFixture<TippytestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TippytestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TippytestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
