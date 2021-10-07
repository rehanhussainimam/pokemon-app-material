import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularMaterialModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
  ],
  declarations: [AppComponent, PokemonCardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
