import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './components/app/app.component';
import { EwokListModule } from './components/ewok-list/ewok-list.module';
import { ewoks } from './reducers/ewoks';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EwokListModule,
    StoreModule.provideStore({ewoks})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
