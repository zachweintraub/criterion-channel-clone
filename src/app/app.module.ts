import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { HeaderComponent } from './home/header/header.component';
import { IntroComponent } from './home/intro/intro.component';
import { SalespitchComponent } from './home/salespitch/salespitch.component';
import { FooterComponent } from './home/footer/footer.component';
import { FeaturedSlideshowComponent } from './now-playing/featured-slideshow/featured-slideshow.component';
import { SearchComponent } from './search/search.component';
import { SalespitchNavComponent } from './home/salespitch/salespitch-nav/salespitch-nav.component';
import { SalespitchDisplayComponent } from './home/salespitch/salespitch-display/salespitch-display.component';
import { CategoryCarouselComponent } from './now-playing/category-carousel/category-carousel.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryPipe } from './category.pipe';
import { FeaturedPipe } from './featured.pipe';
import { ShortDescriptionPipe } from './short-description.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

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
    SearchComponent,
    SalespitchNavComponent,
    SalespitchDisplayComponent,
    CategoryCarouselComponent,
    AdminComponent,
    CategoryPipe,
    FeaturedPipe,
    ShortDescriptionPipe
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }