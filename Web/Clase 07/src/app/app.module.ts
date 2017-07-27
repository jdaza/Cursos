import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { MdToolbarModule } from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HomeModule } from './home/home.module';
import { EstrenosModule } from './estrenos/estrenos.module';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    AppRoutingModule,
    HomeModule,
    EstrenosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
