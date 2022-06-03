import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}
  getMovies() {
    return this.httpClient.get('https://api.themoviedb.org/3/movie/upcoming?api_key=b33eef834991922a1de360290e7f5609');
  }
}
