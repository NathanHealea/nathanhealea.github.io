// --- Imports --- //
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// --- Material Ui Imports  --- //
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Fade from '@material-ui/core/Fade';
import { withStyles } from '@material-ui/core';

// --- Custom Imports --- //
import { Title, Subtitle } from '../../../../components';
import { makeStyles } from '@material-ui/styles';

// --- Componet overrides --- //
export const FiCard = withStyles({
  root: {
    position: 'relative',
    height: '100%',
    width: '100%',
    cursor: 'pointer'
  }
})(Card);

export const FiCardActions = withStyles({
  root: {
    position: 'relative'
  }
})(CardActions);

export const FiCardContent = withStyles(theme => ({
  root: {
    position: 'relative',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.primary.main
  }
}))(CardContent);

export const FiCardMedia = withStyles({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '100%'
  }
})(CardMedia);

// --- styles --- //
const useStyles = makeStyles(theme => ({
  title: {
    minHeight: '2rem',
    maxHeight: '2rem',
    width: '100%'
  },
  subtitle: {
    height: '4rem',
    minHeight: '4rem',
    maxHeight: '4rem'
  }
}));

function Project(props) {
  const classes = useStyles();
  const [show, setShow] = useState(props.image ? false : true);
  const toggleContent = () => {
    if (props.image) {
      setShow(!show);
    }
  };

  return (
    <FiCard
      onMouseEnter={toggleContent}
      onMouseLeave={toggleContent}
      onClick={toggleContent}
    >
      <FiCardMedia image={props.image} />
      <Fade in={show} style={{ transitionDelay: show ? '125ms' : '0ms' }}>
        <FiCardContent>
          <Title
            variant="h4"
            color="secondary"
            className={classes.title}
            gutterBottom
          >
            {props.title}
          </Title>

          <Subtitle
            variant="body2"
            color="secondary"
            className={classes.subtitle}
          >
            {props.subtitle}
          </Subtitle>
          <Button
            variant="outlined"
            href="https://10.nwcu.com"
            target="_blank"
            color="secondary"
          >
            View Project
          </Button>
        </FiCardContent>
      </Fade>
    </FiCard>
  );
}

Project.propTypes = {
  image: PropTypes.string.isRequired
};

// --- Exports --- //
export default Project;
