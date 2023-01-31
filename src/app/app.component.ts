import { Component } from '@angular/core';
import { TippytestComponent } from './tippytest/tippytest.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tippy-jest-test2';
  test = TippytestComponent;
}
