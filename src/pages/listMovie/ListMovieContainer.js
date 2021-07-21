import { connect } from 'react-redux';
import * as moviesAndTvActions from '../../store/actions';
import ListMovie from './ListMovie';


const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    getUpdatedListMovie: () => {
        dispatch(moviesAndTvActions.getListMovies());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListMovie);