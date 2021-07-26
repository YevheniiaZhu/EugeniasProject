import fetch from 'cross-fetch';

export const GET_LIST_MOVIES = 'LIST_MOVIES';
export const GET_LIST_TV_SHOWS = 'LIST_TV_SHOWS'

const LIST_MOVIES_API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=a2179cc6dc943669490ac581598b5f8b&language=ru-RU';
const LIST_TV_SHOWS_API_URL = 'https://api.themoviedb.org/3/discover/tv?api_key=a2179cc6dc943669490ac581598b5f8b&language=ru-RU';

export function getListMovies() {
    return async (dispatch) => {
        const listMovies = await (await fetch(LIST_MOVIES_API_URL)).json();

        dispatch({
            type: GET_LIST_MOVIES,
            payload: {
                listMovies
            }
        });
    }
}


export function getListTvShows() {
    return async (dispatch) => {
        const listTvShows = await (await fetch(LIST_TV_SHOWS_API_URL)).json();

        dispatch({
            type: GET_LIST_TV_SHOWS,
            playload: {
                listTvShows
            }
        });
    }
}

