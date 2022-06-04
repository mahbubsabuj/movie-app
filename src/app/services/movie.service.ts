import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import {
  IMovieRoot,
  IMovie,
  IVideo,
  IVideoItems,
  IMovieImages,
  IMovieImageRoot,
  IMovieCastCrew,
  IMovieCreditsRoot,
} from '../models/movie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}
  getMovies(type: string, count: number): Observable<IMovie[]> {
    return this.httpClient
      .get<IMovieRoot>(`${environment.baseURL}/movie/${type}`, {
        params: new HttpParams()
          .set('api_key', environment.API_KEY)
          .set('responseType', 'application/json'),
      })
      .pipe(
        switchMap((response: IMovieRoot) => {
          return of(response.results.slice(0, count));
        })
      );
  }
  getMovie(id: number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(`${environment.baseURL}/movie/${id}`, {
      params: new HttpParams()
        .set('api_key', environment.API_KEY)
        .set('responseType', 'application/json'),
    });
  }
  getMovieVideos(id: number): Observable<IVideoItems[]> {
    return this.httpClient
      .get<IVideo>(`${environment.baseURL}/movie/${id}/videos`, {
        params: new HttpParams()
          .set('api_key', environment.API_KEY)
          .set('responseType', 'application/json'),
      })
      .pipe(
        switchMap((response: IVideo) => {
          return of(response.results);
        })
      );
  }
  getMoviePhotos(id: number): Observable<IMovieImages[]> {
    return this.httpClient
      .get<IMovieImageRoot>(`${environment.baseURL}/movie/${id}/images`, {
        params: new HttpParams()
          .set('api_key', environment.API_KEY)
          .set('resposeType', 'application/json'),
      })
      .pipe(
        switchMap((response: IMovieImageRoot) => {
          return of(response.backdrops);
        })
      );
  }
  getMovieCredits(id: number): Observable<IMovieCastCrew[]> {
    return this.httpClient
      .get<IMovieCreditsRoot>(`${environment.baseURL}/movie/${id}/credits`, {
        params: new HttpParams()
          .set('api_key', environment.API_KEY)
          .set('resposeType', 'application/json'),
      })
      .pipe(
        switchMap((response: IMovieCreditsRoot) => {
          return of(response.cast);
        })
      );
  }
  searchMovies(page: number): Observable<IMovie[]> {
    return this.httpClient
      .get<IMovieRoot>(`${environment.baseURL}/movie/popular`, {
        params: new HttpParams()
          .set('api_key', environment.API_KEY)
          .set('page', page)
          .set('responseType', 'application/json'),
      })
      .pipe(
        switchMap((response: IMovieRoot) => {
          return of(response.results);
        })
      );
  }
}
