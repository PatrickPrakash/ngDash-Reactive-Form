import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventModule } from 'src/modules/event/event.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, EventModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
