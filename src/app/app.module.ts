import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoSuggestComponent } from './auto-suggest/auto-suggest.component';
import { SuggestionItemComponent } from './suggestion-item/suggestion-item.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { DebounceTimeComponent } from './debounce-time/debounce-time.component';
import { CurrentComponent } from './current/current.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoSuggestComponent,
    SuggestionItemComponent,
    SwitchMapComponent,
    DebounceTimeComponent,
    CurrentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OverlayModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
