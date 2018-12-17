import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TrainingclassComponent } from './trainingclass/trainingclass.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingclassComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
