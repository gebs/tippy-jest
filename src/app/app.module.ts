import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  provideTippyConfig,
  tooltipVariation,
  popperVariation,
  TippyDirective,
} from '@ngneat/helipopper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TippytestComponent } from './tippytest/tippytest.component';

@NgModule({
  declarations: [AppComponent, TippytestComponent],
  imports: [BrowserModule, AppRoutingModule, TippyDirective],
  providers: [
    provideTippyConfig({
      defaultVariation: 'tooltip',
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
