import { connect } from 'react-redux';
import * as moviesAndTvActions from '../../store/actions';
import MovieDetails from './MovieDetails';
import _get from 'lodash.get';

const mapStateToProps = (state) => ({
    movieByIdDetails: _get(state, 'movieById', []),
});

const mapDispatchToProps = (dispatch) => ({
    getMovieByIdDetails: (id) => {
        dispatch(moviesAndTvActions.getMovieById(id));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieDetails);