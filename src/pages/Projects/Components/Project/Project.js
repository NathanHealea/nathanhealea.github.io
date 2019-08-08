// --- Imports --- //
import React, { useState } from 'react'
import PropTypes from 'prop-types'

// --- Material Ui Imports  --- //
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Fade from '@material-ui/core/Fade'
import { withStyles } from '@material-ui/core';

// --- Componet overrides --- //
export const FiCard = withStyles({
  root: {
    position: "relative",
    height: "100%",
    width: "100%",

  }
})(Card);

export const FiCardActions = withStyles({
  root: {
    position: "relative"
  }
})(CardActions);

export const FiCardContent = withStyles(theme => ({
  root: {
    position: "relative",
    height: "100%",
    width: "100%",
    backgroundColor: theme.palette.primary.main,

  }
}))(CardContent);

export const FiCardMedia = withStyles({
  root: {
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
    width: "100%"
  }
})(CardMedia);

function Project(props) {
  const [show, setShow] = useState(false);
  const toggleContent = () => {
    setShow(!show);
  }
  return (
    <FiCard onMouseEnter={toggleContent} onMouseLeave={toggleContent} onClick={toggleContent}>
      <FiCardMedia image={props.image} />
      <Fade in={show} style={{ transitionDelay: show ? '125ms' : '0ms' }} >
        <FiCardContent>
          {props.children}
        </FiCardContent>
      </Fade>

    </FiCard>
  )
}

Project.propTypes = {
  image: PropTypes.string.isRequired
}

// --- Exports --- //
export default Project;