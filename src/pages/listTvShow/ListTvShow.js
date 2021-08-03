import React from 'react';
import Card from '../../components/card/Card';
import './listTvShow.css';
import { Link } from 'react-router-dom';
import FiltersBlock from '../../components/filtersBlock';

class ListTvShow extends React.Component {

    componentDidMount() {
        this.props.getUpdatedListTvShow();
    }

        handleFilterChange = (value) => {
            switch (value) {
                case 'popular':
                    this.props.getListPopularTvShows();
                    break;
                case 'topRated':
                    this.props.getListTopRatedTvShows();
                    break;
                case 'nowPlaying':
                    this.props.getListNowPlayingTvShows();
                    break;
            }
        }

    handleSearch = (query) => {
        this.props.searchTvShow(query);
    }


    render() {
        const { updatedListTvShow } = this.props;
        const posterIMG = 'https://image.tmdb.org/t/p/w500';
        return (
            <div className="listTvShowContainer">
                <div className="listTvShowHeader">
                    <h1>Сериалы</h1>
                    <FiltersBlock
                        handleFilterChange={this.handleFilterChange}
                        handleSearch={this.handleSearch}
                    />
                </div>
                {updatedListTvShow.map(item =>
                    <Link to={`/tv-shows/${item.id}`} key={item.id}>
                        <Card
                            title={item.name}
                            image={posterIMG + item.poster_path}
                            description={item.first_air_date}
                        />
                    </Link>
                )}
            </div>

        );
    }
}

export default ListTvShow;
