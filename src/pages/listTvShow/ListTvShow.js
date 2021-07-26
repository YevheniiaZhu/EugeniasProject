import React from 'react';
import Card from '../../components/Card/Card';
import './listTvShow.css';

const listTvShowCard = [
    {title: "List Tv Show Title",
        image: "https://media.istockphoto.com/vectors/cinema-and-movie-time-vector-id640312764",
        description: "List Tv Show Description"},
    {title: "List Tv Show Title1",
        image: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX24211921.jpg",
        description: "List Tv Show Description1"},
]

class ListTvShow extends React.Component {

    componentDidMount() {
        this.props.getUpdatedListTvShow();
    }

    render() {
        return (
            <div className="listTvShowContainer">
                <h1>List TvShow</h1>
                {listTvShowCard.map(item =>
                    <Card
                        title={item.title}
                        image={item.image}
                        description={item.description}
                    />
                )}
            </div>
        );
    }
}

export default ListTvShow;
