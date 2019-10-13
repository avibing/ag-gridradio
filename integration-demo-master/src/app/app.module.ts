import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AgGridModule} from 'ag-grid-angular';
import { MatCheckboxComponent } from './mat-checkbox.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCheckboxModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    MatCheckboxComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([MatCheckboxComponent]),
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
