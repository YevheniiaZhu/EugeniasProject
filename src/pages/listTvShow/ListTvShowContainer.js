import { connect } from 'react-redux';
import * as moviesAndTvActions from '../../store/actions';
import ListTvShow from './ListTvShow';
import _get from 'lodash.get';


const mapStateToProps = (state) => ({
    updatedListTvShow: _get(state, 'listTvShows.results', [])
});

const mapDispatchToProps = (dispatch) => ({
    getUpdatedListTvShow: () => {
        dispatch(moviesAndTvActions.getListTvShows());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListTvShow);