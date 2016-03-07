import React, { Component } from 'react';
import classNames from 'classnames';

/* component styles */
import { styles } from './styles.scss';

export class Character extends Component {
  static propTypes = {
    characters: React.PropTypes.array,
    game: React.PropTypes.string
  };
  constructor(props) {
    super(props);
    console.log(this);
  }


  handleSelect = (character) => {
    console.log(this.props);
    if (character[this.props.game]) {
      console.log('hi');
      this.props.selectCharacter(character.id);
    }
  };

  handleToggle = () => {
    this.props.toggleMatching();
  }

  render() {

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
            {this.props.characters.map((character, key) => {
              let classes = classNames({
                  'disabled': !(character[this.props.game]),
                  'enabled': character[this.props.game],
                  'selected': character.selected
                });
              classes += " character col-xs-4 col-sm-2 col-md-1 col-lg-1";
              return (
              <div className={classes} key={key} onClick={ () => this.handleSelect(character)}>
                <div className="character-image">
                  <div className="overlay"></div>
                  <img src={character.imageURL}/>
                </div>
                <h4>
                  {character.name}
                </h4>

              </div>
            )})}
          </div>
          <div>
            <button className="btn btn-lg btn-default" onClick={() => this.handleToggle()}>
              'Match'
            </button>
          </div>
        </div>
      </section>
    );
  }
}
