import React, { Component } from 'react';
import classNames from 'classnames';
import { generateMatching } from '../../utils/generateMatching';

/* component styles */
import { styles } from './styles.scss';

export class CharacterMatches extends Component {
  static propTypes = {
    characters: React.PropTypes.array,
  };
  constructor(props) {
    super(props);
    this.selectedCharacters = this.props.characters.filter((char) => {
      return char.selected && char[this.props.gameFilter];
    });
    this.matches = generateMatching(this.selectedCharacters);
  }

  handleToggle = () => {
    this.props.toggleMatching();
  }

  render() {
    return (
      <section className={`${styles}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h2>
                Generated Ideal Matches Score: {this.matches.score}
              </h2>
            </div>
          </div>
          <div className="characters row">
            {this.matches.pairs.map((pair, key) => {
              let char1 = this.selectedCharacters.filter((char) => {
                return char.id === pair.id1;
              }).shift();
              let char2 = this.props.characters.filter((char) => {
                return char.id === pair.id2;
              }).shift();

              return (
              <div className="pair col-xs-12 col-md-6 col-lg-4" key={key}>
                <div className="character col-xs-6">
                  <div className="character-image">
                    <div className="overlay"></div>
                    <img src={char1.imageURL}/>
                  </div>
                  <h4>
                    {char1.name}
                  </h4>
                </div>

                <div className="character col-xs-6">
                  <div className="character-image">
                    <div className="overlay"></div>
                    <img src={char2.imageURL}/>
                  </div>
                  <h4>
                    {char2.name}
                  </h4>
                </div>
                <div className="heart">
                  <img src="http://pngimg.com/upload/heart_PNG706.png"/>
                </div>

              </div>
            )})}
          </div>
          <div>
            <button className="btn btn-lg btn-default" onClick={() => this.handleToggle()}>
              Back To Select
            </button>
          </div>
        </div>
      </section>
    );
  }
}
