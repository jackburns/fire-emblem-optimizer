import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Characters from './files/characters.json';

/* components */
import { TopImage } from 'components/TopImage';
import { Character } from 'components/Character';
import { Games } from 'components/Games';
import * as GameActions from 'actions/gameFilter';

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

console.log(GameActions);

function mapStateToProps(state) {
  return {
    gameFilter: state.gameFilter
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GameActions, dispatch)
  }
}
export class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <DocumentMeta {...metaData} />
        <TopImage />
        <Games game={state.selectedGame}/>
        <Character characters={Characters.characters} game={state.selectedGame} />
      </section>
    );
  }
}
