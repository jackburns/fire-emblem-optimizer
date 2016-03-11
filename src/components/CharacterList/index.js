import React, { Component } from 'react';
import LoadingOrderAnimation from 'react-loading-order-with-animation';
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
      this.error = "Please select at least 1 male and 1 female character to match";
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
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <h2 className="italicized">
                Select Characters To Match
              </h2>
            </div>                                      
          </div>
          <div>
          <div className="row">
          <LoadingOrderAnimation animation="fade-in"
                                     move="from-top-to-bottom"
                                     distance={50}
                                     speed={1000}
                                     wait={500}>  
          <div className="characters row wrapper males">
            <h2 className="gender"> Males </h2>
            {this.props.characters.map((character, key) => {
              if (character[this.props.game] && this.props.characters[key].sex === "m") {
              let classes = classNames({
                  'selected': character.selected
                });
              classes += " character col-xs-12 col-sm-4 col-md-2 col-lg-2";
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
          </LoadingOrderAnimation>
          <div className="divider"></div>
          <LoadingOrderAnimation  animation="fade-in"
                                     move="from-top-to-bottom"
                                     distance={50}
                                     speed={1000}
                                     wait={500}>
          <div className="characters row wrapper females">
            <h2 className="gender"> Females </h2>
            {this.props.characters.map((character, key) => {
              if (character[this.props.game] && this.props.characters[key].sex === "f") {
              let classes = classNames({
                  'selected': character.selected
                });
              classes += " character col-xs-12 col-sm-4 col-md-2 col-lg-2";
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
          </LoadingOrderAnimation>
          </div>
          <LoadingOrderAnimation animation="fade-in"
                                     move=""
                                     distance={100}
                                     speed={1000}
                                     wait={400}>
          <div className="character-buttons">
            <p className="error">{this.error}</p>
            <button className="btn btn-lg btn-default" onClick={() => this.handleToggle()}>
              Match
            </button>
            <button className="btn btn-lg btn-default" onClick={() => this.handleReset()}>
              Reset Seletions
            </button>
          </div>
                           </LoadingOrderAnimation>
        </div>
      </section>
    );
  }
}
