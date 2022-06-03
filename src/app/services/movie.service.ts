import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovieRoot } from '../models/movie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}
  getMovies(type: string): Observable<IMovieRoot> {
    return this.httpClient.get<IMovieRoot>(
      `${environment.baseURL}/movie/${type}`,
      {
        params: new HttpParams().set('api_key', environment.API_KEY).set('responseType', 'application/json'),
      }
    );
  }
}
