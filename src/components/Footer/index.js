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
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <p>
                Special thanks to reddit users 
                <a href="https://www.reddit.com/r/fireemblem/comments/4549gy/fatespairing_recommendation_compilation/">/u/Shephen</a>for providing rankings used to calculate pairs, and to
                <a href="https://www.reddit.com/r/fireemblem/comments/48u8b4/fe14_optimal_fates_pairings_birthright_conquest/">/u/DoctorBandage</a>for his original work in using Munkres to determine pairings and for inspiring the project!
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
