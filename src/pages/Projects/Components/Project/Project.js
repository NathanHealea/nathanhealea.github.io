// --- Imports --- //
import React from 'react'
import PropTypes from 'prop-types'

// --- Material Ui Imports  --- //
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// --- Custom Component Imports -- //
import { Title, Subtitle } from '../../../../components';
import { withStyles } from '@material-ui/core';


// --- Styling --- //
const ProjectStyles = theme => ({
  root: {
    width: 250,
    minWidth: 250
  },
  media: {

    position: 'absolute',
    top: 0,
    left: 0,
    height: 140,
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent'
  }

})

function Project(props) {

  const {
    classes,
    className,
    name,
    description,
    link,
    image
  } = props

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia image={image} className={classes.media} />
        <CardContent className={classes.content} >
          <Title varient="h3">{name}</Title>
          <Subtitle variant="h5" >{description}</Subtitle>
          <Button variant="outlined" href={link} color="primary">View Project</Button>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

// --- Exports --- //
export default withStyles(ProjectStyles)(Project)