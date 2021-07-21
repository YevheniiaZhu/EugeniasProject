import React from 'react';

class ListTvShow extends React.Component {

  componentDidMount() {
    this.props.getUpdatedListTvShow();
  }

  render() {
    return <div>List TvShow</div>;
  }
}

export default ListTvShow;
