import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import './project.css'

const styles = {
  card: {
    //minWidth: 275,
    //maxWidth: 350,
    textAlign: 'left',
  },
  title: {
    //fontSize: 14,
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
  },
}

class Project extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div className="Project">
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} component="h2" variant="subtitle1" color="textPrimary" gutterBottom>
              { this.props.name }
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
              { this.props.description }
            </Typography>
          </CardContent>
          <Divider variant="middle" />
          <CardActions>
            <Button size="small" color="secondary" href={this.props.url}>
              Demo
            </Button>
            <Button size="small" color="secondary" href={this.props.gitHubUrl}>
              GitHub
            </Button>
          </CardActions>
        </Card>
      </div>
    )
  }
}

Project.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Project)