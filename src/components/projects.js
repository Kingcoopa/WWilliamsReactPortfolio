import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'white', fontWeight: 400,height: '176px', background: 'url(https://cdn2.scratch.mit.edu/get_image/project/420506313_282x210.png)'}} >Cat an Mouse</CardTitle>
            <CardText style={{color: 'black'}}>
              Project 1
            </CardText>
            <CardActions border>
              <Button colored><a href="https://scratch.mit.edu/users/King-coopa/" target="_blank">Scratch Profile</a></Button>
              <Button colored><a href="https://scratch.mit.edu/projects/420506313/" target="_blank">Link</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://github.com/Kingcoopa/Ask-Tech-Quiz/blob/main/Assets/image/Quiz1.png?raw=true) center / cover'}} >Code Quiz</CardTitle>
            <CardText style={{color: 'black'}}>
              Project 2
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/Kingcoopa/Ask-Tech-Quiz">Github</a></Button>
              <Button colored><a href="https://kingcoopa.github.io/Ask-Tech-Quiz/">Link</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'clack', height: '176px', background: 'url(https://github.com/Kingcoopa/Tripper/raw/main/public/assets/images/cover.png) center / cover'}} >Tripper App</CardTitle>
            <CardText style={{color: 'black'}}>
              Project 3
            </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/Kingcoopa/Tripper">Github</a></Button>
              <Button colored><a href="https://tripper-db.herokuapp.com/">Link</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <p>No additional Projects to ADD</p>
      )
   }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>My Projects</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
