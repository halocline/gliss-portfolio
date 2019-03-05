import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

import './portfolio.css'
import Project from '../project/project'
import projects from '../data/projects.json'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
})

function ProjectList(props) {
  const classes = {
    root: {
      margin: 40,
    }
  }
  const projects = props.projects
  const listItems = projects.map( (project) =>
    <Grid item key={project.id} xs={12} sm={6} md={4} >
      <Project
        {...project}
      />
    </Grid>
  )

  return (
    <Grid container spacing={32} >
        {listItems}
    </Grid>
  )
}

class Portfolio extends React.Component {
  render() {
    return (
      <div className="Portfolio">
        <div className="portfolio-cards">
          <ProjectList projects={projects} />
        </div>
      </div>
    )
  }
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Portfolio)
