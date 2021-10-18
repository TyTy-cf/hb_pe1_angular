import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursComponent } from './cours/cours.component';
import { MultTableComponent } from './mult-table/mult-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursComponent,
    MultTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
