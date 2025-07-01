import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipe } from './shared/custom.pipe';
import { Dir1Directive } from './shared/dir1.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    Dir1Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
