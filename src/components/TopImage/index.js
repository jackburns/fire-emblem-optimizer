import React, { Component } from 'react';
import LoadingOrderAnimation from 'react-loading-order-with-animation';

/* utils */
import { setParallax } from '../../utils/parallax';

/* component styles */
import { styles } from './styles.scss';

export class TopImage extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className={`${styles}`}>
            <div>
             <LoadingOrderAnimation animation="fade-in"
                move="from-top-to-bottom"
                distance={30}
                speed={700}
                wait={700}
              >
             <div className="logo">
                <img src={require("./files/FEOptimizerLogo.png")}/>
              </div>
              </LoadingOrderAnimation>
              <LoadingOrderAnimation animation="fade-in"
                move="from-top-to-bottom"
                distance={60}
                speed={700}
                wait={900}
              >
              </LoadingOrderAnimation>
        </div>
      </section>
    );
  }
}
