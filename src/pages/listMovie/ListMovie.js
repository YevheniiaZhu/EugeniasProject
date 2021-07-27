import React from 'react';
import Card from '../../components/card/Card';
import './listMovie.css';

class ListMovie extends React.Component {

    componentDidMount() {
        this.props.getUpdatedListMovie();
    }

    render() {
        const { updatedListMovie } = this.props;
        const posterIMG = 'https://image.tmdb.org/t/p/w500';
        return (
            <div className="listMovieContainer">
                <h1>Фильмы</h1>
                {updatedListMovie.map(item =>
                    <Card
                        key={item.id}
                        title={item.title}
                        image={posterIMG + item.poster_path}
                        description={item.release_date}
                    />
                )}
            </div>
        );
    }
}

export default ListMovie;
