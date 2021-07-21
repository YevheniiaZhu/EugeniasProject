import { connect } from 'react-redux';
import * as moviesAndTvActions from '../../store/actions';
import ListTvShow from './ListTvShow';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    getUpdatedListTvShow: () => {
        dispatch(moviesAndTvActions.getListTvShows())
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListTvShow);