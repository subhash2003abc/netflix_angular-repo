import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { BannerComponent } from './core/components/banner/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCarouselComponent } from './shared/movie_carousel/movie-carousel/movie-carousel.component';
import { CommonModule } from '@angular/common';
import { CharcterPipe } from './shared/pipes/charcter.pipe';
import { ImagePipe } from './shared/pipes/image.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    MovieCarouselComponent,
    CharcterPipe,
    ImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
