import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';

let GAMES = [{
  imageURL: 'http://vignette3.wikia.nocookie.net/fireemblem/images/c/c7/FEF_Birthright_NA%26EU_logo.png',
  name: 'Birthright',
}, {
  imageURL: 'http://vignette4.wikia.nocookie.net/fireemblem/images/8/83/FEF_Conquest_NA%26EU_logo.png',
  name: 'Conquest',
}, {
  imageURL: 'http://vignette2.wikia.nocookie.net/fireemblem/images/6/61/FEF_Revelation_NA%26EU_logo.png',
  name: 'Revelation',
}];

GAMES = GAMES.map(game => {
  game.imageURL += '/revision/latest/scale-to-width-down/300';
  return game
});
console.log(GAMES);

export class Games extends Component {
  render() {
    return (
      <section className={`${styles}`}>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h2>
                Select game
              </h2>
            </div>
          </div>

          <div className="row">
          {
            GAMES.map((game, key) =>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 text-center"
                key={key}>
                  <img src={game.imageURL} />
              </div>
            )
          }
          </div>
        </div>
      </section>
    );
  }
}
