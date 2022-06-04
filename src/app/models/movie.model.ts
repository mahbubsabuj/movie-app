export interface IMovieRoot {
  date?: IDate;
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface IDate {
  maximum: Date;
  minimum: Date;
}

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
