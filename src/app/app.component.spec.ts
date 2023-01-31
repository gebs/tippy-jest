import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  provideTippyConfig,
  tooltipVariation,
  popperVariation,
  TippyDirective,
} from '@ngneat/helipopper';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, TippyDirective],
      declarations: [AppComponent],
      providers: [
        provideTippyConfig({
          defaultVariation: 'tooltip',
          variations: {
            tooltip: tooltipVariation,
            popper: popperVariation,
          },
        }),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tippy-jest-test2'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tippy-jest-test2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'tippy-jest-test2 app is running!'
    );
  });
});
