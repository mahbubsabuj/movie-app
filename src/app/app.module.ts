import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './components/slider/slider.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsBannerComponent } from './components/items-banner/items-banner.component';
import { ItemComponent } from './components/item/item.component';
import { PaginatorModule } from 'primeng/paginator';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { TabViewModule } from 'primeng/tabview';
import { OverviewComponent } from './components/overview/overview.component';
import { PhotosComponent } from './components/photos/photos.component';
import { VideosComponent } from './components/videos/videos.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';
import { GalleriaModule } from 'primeng/galleria';
import { CarouselModule } from 'primeng/carousel';
import { MovieService } from './services/movie.service';
import { TvComponent } from './pages/tv/tv.component';
import { TvItemComponent } from './components/tv-item/tv-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    SliderComponent,
    ItemsBannerComponent,
    ItemComponent,
    MovieDetailsComponent,
    OverviewComponent,
    PhotosComponent,
    VideosComponent,
    VideoEmbedComponent,
    TvComponent,
    TvItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PaginatorModule,
    TabViewModule,
    GalleriaModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
MovieService