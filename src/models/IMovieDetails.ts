
export interface ICollectionRef {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
}

export interface IGenreRef {
    id: number;
    name: string;
}

export interface IProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}

export interface IProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface ISpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export type MovieStatus =
    | "Rumored"
    | "Planned"
    | "In Production"
    | "Post Production"
    | "Released"
    | "Canceled";

export interface IMovieDetails {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: ICollectionRef | null;
    budget: number;
    genres: IGenreRef[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: IProductionCompany[];
    production_countries: IProductionCountry[];
    release_date: string; // YYYY-MM-DD
    revenue: number;
    runtime: number | null;
    spoken_languages: ISpokenLanguage[];
    status: MovieStatus;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
