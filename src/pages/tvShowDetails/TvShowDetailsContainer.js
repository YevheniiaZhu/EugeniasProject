import { connect } from 'react-redux';
import * as moviesAndTvActions from '../../store/actions';
import TvShowDetails from './TvShowDetails';
import _get from 'lodash.get';

const mapStateToProps = (state) => ({
    tvShowByIdDetails: _get(state, 'tvShowById', []),
});

const mapDispatchToProps = (dispatch) => ({
    getTvShowByIdDetails: (id) => {
        dispatch(moviesAndTvActions.getTvShowById(id));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TvShowDetails);
