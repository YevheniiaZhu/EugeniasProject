import React from 'react';
import './filtersBlock.css';
import moon from '../../assets/img/icon-moon.png';
import sun from '../../assets/img/icon-sun.png';

class FiltersBlock extends React.Component {
    render() {
        const { handleFilterChange, handleSearch, isLightTheme, handleClick }  = this.props;

        return (
            <div className="filtersBlockContainer">
                <div className="filtersBlockSelect">
                    <label>Сортировать: </label>
                    <select
                        className="filtersBlockCheckbox"
                        onChange={(e) => handleFilterChange(e.target.value)}
                    >
                        <option value="popular">Популярные</option>
                        <option value="topRated">С наивысшим рейтингом</option>
                        <option value="nowPlaying">Сейчас смотрят</option>
                    </select>
                </div>
                <div className="filtersBlockInput">
                    <input
                        onChange={(e) => handleSearch(e.target.value)}
                        type="search"
                        id="search"
                        name="search"
                        placeholder="Поиск"
                    />
                </div>
                <div className="listMovieTheme">
                <input
                    onClick={() => handleClick()}
                    type="image"
                    src={isLightTheme ? moon : sun}
                    alt=""
                />
                </div>
            </div>
        )
    }
}

export default FiltersBlock;

