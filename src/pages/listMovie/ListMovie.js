import React from 'react';

class ListMovie extends React.Component {

    componentDidMount() {
        this.props.getUpdatedListMovie();
    }

    render() {
        return <div>List Movie</div>;
    }
}

export default ListMovie;
