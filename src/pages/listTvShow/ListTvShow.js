import React from 'react';
import Card from '../../components/card/Card';
import './listTvShow.css';

const listTvShowCard = [
    {
        title: "List Tv Show Title",
        image: "https://media.istockphoto.com/vectors/cinema-and-movie-time-vector-id640312764",
        description: "List Tv Show Description"
    },
    {
        title: "List Tv Show Title1",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24211921.jpg",
        description: "List Tv Show Description1"
    },
]

class ListTvShow extends React.Component {

    componentDidMount() {
        this.props.getUpdatedListTvShow();
    }

    render() {
        console.log(this.props);
        const { updatedListTvShow } = this.props;
        const posterIMG = 'https://image.tmdb.org/t/p/w500';
        return (
            <div className="listTvShowContainer">
                <h1>Сериалы</h1>
                {updatedListTvShow.map(item =>
                    <Card
                        title={item.name}
                        image={posterIMG + item.poster_path}
                        description={item.first_air_date}
                    />
                )}
            </div>
        );
    }
}

export default ListTvShow;
