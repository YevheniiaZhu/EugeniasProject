import React from 'react';
import './filtersBlock.css';

class FiltersBlock extends React.Component {
    render() {
        return (
            <div className="filtersBlockContainer">
                <div className="filtersBlockSelect">
                    <label>Сортировать: </label>
                    <select className="filtersBlockCheckbox">
                        <option value="popular">Популярные</option>
                        <option value="topRated">С наивысшим рейтингом</option>
                        <option value="nowPlaying">Сейчас смотрят</option>
                    </select>
                </div>
                <div className="filtersBlockInput">
                    <input
                        type="search"
                        id="search"
                        name="search"
                        placeholder="Поиск">
                    </input>
                </div>
            </div>
        )
    }
}

export default FiltersBlock;