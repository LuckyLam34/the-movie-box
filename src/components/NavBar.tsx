import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { connect } from 'react-redux';
import { IState } from './../redux/interfaces';
import { getMovieGenres, setSelectedGenre } from '../redux/actions';

class NavBar extends React.Component<any, any> {
  render() {
    return (
      <section className="navbar container mt-4 pb-0">
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Popular
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pages/top-rated" activeClassName="active">
              Top Rated
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/pages/upcoming" activeClassName="active">
              Upcoming
            </NavLink>
          </li>
          <li className="nav-item custom-dropdown">
            <Dropdown as={ButtonGroup}>
              <button
                style={{ fontSize: '16px' }}
                type="button"
                className="btn btn-link pt-0 pr-0"
              >
                {this.props.genres[this.props.selectedGenre]
                  ? this.props.genres[this.props.selectedGenre].name
                  : 'All Genres'}
              </button>

              <Dropdown.Toggle
                split
                variant="success"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                {this.props.genresArr.map((item: any) => (
                  <Dropdown.Item
                    onClick={() => this.props.setSelectedGenre(item.id)}
                    key={item.id}
                  >
                    {item.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
        <hr className="mb-2" />
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  setSelectedGenre: (selectedGenre: number) =>
    dispatch(setSelectedGenre(selectedGenre)),
});
const mapStateToProps = (state: IState) => {
  const { genresArr, genres, selectedGenre } = state;

  return {
    genresArr,
    genres,
    selectedGenre,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
