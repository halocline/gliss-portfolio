import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import './project.css'

const styles = {
  card: {
    //minWidth: 275,
    //maxWidth: 350,
    textAlign: 'left',
    transitionDuration: '0.9s',
  },
  title: {
    //fontSize: 14,
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 140,
  },
}



class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elevation: 1
    }
  }

  handleMouseOver = () => {
    this.setState(state => ({ elevation: 20 }))
  }

  handleMouseOut = () => {
    this.setState(state => ({ elevation: 1 }))
  }

  render() {
    const { classes } = this.props

    return (
      <div className="Project">
        <Card
          className={classes.card}
          elevation={ this.state.elevation }
          onMouseOver={ this.handleMouseOver }
          onMouseOut={ this.handleMouseOut }
        >
          <CardMedia
            className={classes.media}
            image={ this.props.image.file }
            title={ this.props.image.title }
          />
          <CardContent>
            <Typography
              className={classes.title}
              component="h2"
              variant="subtitle1"
              color="textPrimary"
              gutterBottom
            >
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
