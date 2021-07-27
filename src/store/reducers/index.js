import * as moviesAndTvActions from '../actions/index';

const defaultState = {
    listMovies: [],
    listTvShows: [],
    movieById: {},
    tvShowById: {}
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case moviesAndTvActions.GET_LIST_MOVIES:
            return {
                ...state,
                ...action.payload,
            };
        case moviesAndTvActions.GET_LIST_TV_SHOWS:
            return {
                ...state,
                ...action.playload,
            }

        default:
            return state;
    }
}