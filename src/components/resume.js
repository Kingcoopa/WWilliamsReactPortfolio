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
             <h2 style={{paddingTop: '2em'}}>Wilkinson Williams</h2>
             
             <div style={{textAlign: 'center'}}>
              <img src="/images/FB_IMG_1591324518154.jpg"
                alt="avatar" style={{height: '300px', width: '220px'}}/>
            </div>

           
            <h4 style={{color: 'grey'}}>Web Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a full stack web engineer. I am excited and looking forward to my growth as a web engineer. I hail a high level of professionalism, drive, life experience, creativity, and willingness to learn. My focus is to self study and career growth. My main goal is to provide quality service to every organization I work for.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>South Charlotte, 28209</p>
            <h5>Phone</h5>
            <p>(704) XXX-7890</p>
            <h5>Email</h5>
            <p>srawilkinsonwilliams@yahoo.com</p>
            <h5>Web</h5>
            <p>https://kingcoopa.github.io/My-Portfolio-Portal/</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2003}
              endYear={2004}
              schoolName="Isothermal Community College"
              schoolDescription="General Studies"
               />

               <Education
                 startYear={2012}
                 endYear={2014}
                 schoolName="Community College of the Air FOrce"
                 schoolDescription="Logistical Management"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={"Present"}
              jobName="Aircraft LoadMaster"
              jobDescription="Loadmasters perform their duties during extensive trips to all areas of the world. They are responsible for supervising the loading and unloading of cargo, vehicles and people on a variety of aircraft. A loadmaster's duties include mathematically preplanning the correct placement of the load on the airplane, providing passenger comfort and safety, securing cargo and taking part in airdrop operations. Loadmasters are on flying status as an aircrew member and are required to fly as part of the job."
              />

              <Experience
                startYear={2012}
                endYear={"Present"}
                jobName="Fire Fighter"
                jobDescription="Defend the citizens of my city against possible loss of life and property damage."
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
