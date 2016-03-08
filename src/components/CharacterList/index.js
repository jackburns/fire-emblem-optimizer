import React, { Component } from 'react';
import classNames from 'classnames';

/* component styles */
import { styles } from './styles.scss';

export class CharacterList extends Component {
  static propTypes = {
    characters: React.PropTypes.array,
    game: React.PropTypes.string
  };
  constructor(props) {
    super(props);
  }

  handleSelect = (character) => {
    if (character[this.props.game]) {
      this.props.selectCharacter(character.id);
    }
  };

  handleToggle = () => {
    let selected = this.props.characters.filter((character) => {
      return character.selected && character[this.props.game];
    });
    let girls = [],
        guys = [];

    selected.map((character) => {
      character.sex === "f" ? girls.push(character) : guys.push(character);
    });

    if (girls.length > 0 && guys.length > 0) {
      this.props.toggleMatching();
      this.error = "";
    } else {
      this.error = "Please select at least 1 guy and 1 girl character to match";
      this.forceUpdate();
    }
  }

  handleReset = () => {
    this.props.resetSelected();
  }

  render() {
    return (
      <section className={`${styles}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h2>
                Select Characters To Match
              </h2>
            </div>
          </div>
          <div className="characters row">
            {this.props.characters.map((character, key) => {
              if (character[this.props.game]) {
              let classes = classNames({
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
            )}})}
          </div>
          <div>
            <p className="error">{this.error}</p>
            <button className="btn btn-lg btn-default" onClick={() => this.handleToggle()}>
              Match
            </button>
            <button className="btn btn-lg btn-default" onClick={() => this.handleReset()}>
              Reset
            </button>
          </div>
        </div>
      </section>
    );
  }
}
