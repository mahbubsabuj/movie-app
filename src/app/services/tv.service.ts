import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ITvRoot, ITvShow } from '../models/tv.model';

@Injectable({
  providedIn: 'root',
})
export class TvService {
  constructor(private httpClient: HttpClient) {}
  getTvShows(): Observable<ITvShow[]> {
    return this.httpClient
      .get<ITvRoot>(`${environment.baseURL}/tv/popular`, {
        params: new HttpParams()
          .set('api_key', environment.API_KEY)
          .set('responseType', 'application/json'),
      })
      .pipe(
        switchMap((response) => {
          return of(response.results);
        })
      );
  }
}
