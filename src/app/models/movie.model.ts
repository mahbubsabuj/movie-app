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

export interface IGenre {
  id: number;
  name: string;
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
  revenue?: number;
  runtime?: number;
  genres?: IGenre[];
  status?: string;
}

export interface IVideo {
  id: number;
  results: IVideoItems[];
}

export interface IVideoItems {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: Date;
  site: string;
  size: number;
  type: string;
}

export interface IMovieImageRoot {
  id: number;
  backdrops: IMovieImages[];
  posters: IMovieImages[];
}

export interface IMovieImages {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: string | null;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface IMovieCreditsRoot {
  id: number;
  cast: IMovieCastCrew[];
  crew: IMovieCastCrew[];
}

export interface IMovieCastCrew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}