import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { SearchFilter } from './pipes/search.filter';

import { ListComponent } from './components/pages/list/list.component';
import { DetailsComponent } from './components/pages/details/details.component';

import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularMaterialModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
    PokemonCardComponent,
    SearchFilter,
    ListComponent,
    DetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
