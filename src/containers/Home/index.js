import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import Characters from './files/characters.json';

/* components */
import { TopImage } from 'components/TopImage';
import { Character } from 'components/Character';
import { Games } from 'components/Games';
import { CharacterMatches } from 'components/CharacterMatches';
import * as GameActions from 'actions/gameFilter';
import * as CharacterActions from'actions/characters';
import * as MatchingActions from 'actions/matching';

const metaData = {
  title: 'Fire Emblem Optimizer',
  description: 'Optimize your Fire Emblem Fates character pairings',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'fire,emblem,fates,character,pair,match,optimzer,optimize',
    },
  },
};

@connect(
  state => state.matching,
  dispatch => bindActionCreators(MatchingActions, dispatch)
)
@connect(
  state => state.gameFilter,
  dispatch => bindActionCreators(GameActions, dispatch)
)
@connect(
  state => state.characters,
  dispatch => bindActionCreators(CharacterActions, dispatch)
)
export class Home extends Component {
  constructor(props) {
    super(props);
    this.props.loadCharacters(Characters.characters);
  }


export class Home extends Component {
  render() {
    let pageComponents;
    if(this.props.displayMatching){
      pageComponents = <CharacterMatches characters={this.props.characters} toggleMatching={this.props.toggleMatching}/>
    } else {
      pageComponents =
        <div>
          <Games gameFilter={this.props.gameFilter} updateGame={this.props.updateGame}/>
          <Character
            characters={this.props.characters}
            game={this.props.gameFilter}
            selectCharacter={this.props.selectCharacter}
            toggleMatching={this.props.toggleMatching}/>
        </div>;

    }
    return (
      <section>
        <DocumentMeta {...metaData} />
        <TopImage />
        {pageComponents}
      </section>
    );
  }
}
