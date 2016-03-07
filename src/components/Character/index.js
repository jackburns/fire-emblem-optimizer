import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';

export class Character extends Component {
  static propTypes = {
    characters: React.PropTypes.array,
    game: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.characters = this.props.characters.map(character => {
      character.imageURL += '/revision/latest/scale-to-width-down/100';
      return character;
    });
  }

  render() {
    console.log(this.props);
    return (
      <section className={`${styles}`}>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h2>
                Boilerplate contains Yolo
              </h2>
            </div>
          </div>
           <div className="characters row">
            {this.characters.map((character, key) =>
              <div className="character col-xs-4 col-sm-2 col-md-1 col-lg-1" key={key}>
                <div className="character-image disable">
                  <img className="overlay" src={character.imageURL}/>
                </div>
                <h4>
                  {character.name}
                </h4>

              </div>
            )}
           </div>
        </div>
      </section>
    );
  }
}
