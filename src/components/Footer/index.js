import React, { Component } from 'react';

/* component styles */
import { styles } from './styles.scss';

export class Footer extends Component {

  render() {
    return (
      <footer className={`${styles}`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <span>
                <a className="github-button"
                href="https://github.com/raptiq/fire-emblem-optimizer">
                  Source
                </a>
              </span> 
              <span>             
                <a className="github-button"
                  href="https://github.com/anorudes/redux-easy-boilerplate"
                  aria-label="Star anorudes/redux-easy-boilerplate on GitHub">
                  Built with
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
