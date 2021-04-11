import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src=""
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Wilkinson Williams</h2>
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a full stack web engineer. I am excited and looking forward to my growth as a web engineer. I hail a high level of professionalism, drive, life experience, creativity, and willingness to learn. My focus is to self study and career growth. My main goal is to provide quality service to every organization I work for.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>South Charlotte, 94906</p>
            <h5>Phone</h5>
            <p>(704) XXX-7890</p>
            <h5>Email</h5>
            <p>wilkinsonwilliams@github.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2002}
              endYear={2006}
              schoolName="ICC"
              schoolDescription="My Studies"
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="Community College of the Air FOrce"
                 schoolDescription="Ny Studies"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Military"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Military"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
