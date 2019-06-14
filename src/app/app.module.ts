import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './home/intro/intro.component';
import { SalespitchComponent } from './home/salespitch/salespitch.component';
import { FooterComponent } from './home/footer/footer.component';
import { FeaturedSlideshowComponent } from './now-playing/featured-slideshow/featured-slideshow.component';
import { ContentGridComponent } from './now-playing/content-grid/content-grid.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NowPlayingComponent,
    HeaderComponent,
    IntroComponent,
    SalespitchComponent,
    FooterComponent,
    FeaturedSlideshowComponent,
    ContentGridComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
