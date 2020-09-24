import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModalModule } from './_modal';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { TestPageComponent } from './test-page';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ModalModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        TestPageComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }