import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
          <div style={{textAlign: 'center'}}>
              <img src="/images/Sketch005.png"
                alt="avatar" style={{height: '380px', width: '580px'}}/>
            </div>

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://www.linkedin.com/in/wilkinson-j-williams" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/Kingcoopa" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* My Portfolio Site */}
          <a href="https://kingcoopa.github.io/My-Portfolio-Portal/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-link" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
