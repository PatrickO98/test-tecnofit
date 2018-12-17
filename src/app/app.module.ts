import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { TrainingclassComponent } from './trainingclass/trainingclass.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingclassComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
