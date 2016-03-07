import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import Characters from './files/characters.json';

/* components */
import { TopImage } from 'components/TopImage';
import { Tools } from 'components/Tools';
import { Games } from 'components/Games';

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



export class Home extends Component { 
  render() {
      console.log(Characters);

    return (
      <section>
        <DocumentMeta {...metaData} />
        <TopImage />
        <Games />

        <Tools />
      </section>
    );
  }
}
