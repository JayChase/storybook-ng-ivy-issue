import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibOneModule } from 'lib-one';
import { LibTwoModule } from 'lib-two';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LibOneModule, LibTwoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
