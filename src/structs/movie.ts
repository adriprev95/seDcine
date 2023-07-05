interface Generes {
  id: number;
  name: string;
}
interface Company{
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
interface Country{
  iso_3166_1: string;
  name: string;
}
interface Language{
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {};
  budget: number;
  genres: Array<Generes>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<Company>;
  production_countries: Array<Country>;
  release_date: Date;
  revenue: number;
  runtime: number;
  spoken_languages: Array<Language>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
