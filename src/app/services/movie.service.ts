import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { IMovieRoot, IMovie, IVideo, IVideoItems } from '../models/movie.model';
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
    return this.httpClient.get<IVideo>(
      `${environment.baseURL}/movie/${id}/videos`,
      {
        params: new HttpParams()
          .set('api_key', environment.API_KEY)
          .set('responseType', 'application/json'),
      }
    ).pipe(switchMap((response: IVideo) => {
      return of(response.results);
    }));
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
