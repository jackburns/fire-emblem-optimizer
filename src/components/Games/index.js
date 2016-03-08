import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

/* component styles */
import { styles } from './styles.scss';

let GAMES = [{
  imageURL: 'http://vignette3.wikia.nocookie.net/fireemblem/images/c/c7/FEF_Birthright_NA%26EU_logo.png',
  name: 'birthright',
}, {
  imageURL: 'http://vignette4.wikia.nocookie.net/fireemblem/images/8/83/FEF_Conquest_NA%26EU_logo.png',
  name: 'conquest',
}, {
  imageURL: 'http://vignette2.wikia.nocookie.net/fireemblem/images/6/61/FEF_Revelation_NA%26EU_logo.png',
  name: 'revelation',
}];

GAMES = GAMES.map(game => {
  game.imageURL += '/revision/latest/scale-to-width-down/300';
  return game
});

export class Games extends Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    updateGame: React.PropTypes.func,
  };
  constructor(props) {
    super(props);
  }
  handleChange = (name) => {
    if (this.props.gameFilter != name) {
      this.props.updateGame(name);
    }
    event.preventDefault();
  };
  render() {
    return (
      <section className={`${styles}`}>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h2>
                Select Game
              </h2>
            </div>
          </div>
          <div className="row">
          {GAMES.map((game, key) => {
            let classes = classNames({
              'selected': game.name === this.props.gameFilter
            });
            classes += " game col-xs-11 col-sm-4 col-md-4 col-lg-4 text-center"
            return (
              <div className={classes}
                key={key}
                onClick={() => this.handleChange(game.name)}>
                  <img src={game.imageURL} />
              </div>
          )})}
          </div>
        </div>
      </section>
    );
  }
}
