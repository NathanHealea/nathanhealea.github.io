// --- Imports --- //
import React from "react";

// --- Material Ui Imports  --- //
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/core/styles/useTheme";
import makeStyles from "@material-ui/core/styles/makeStyles";

// --- Custom Component Imports -- //
import { Title, Subtitle } from "../../../../components";

// --- Styling --- //

const useStyles = makeStyles(theme => ({
  experienceImage: {
    [theme.breakpoints.up("md")]: {
      order: props =>props.odd ? 2 : 1,
    },
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },

  },
  experienceDetials: {
    [theme.breakpoints.up("md")]: {
      order: props => props.odd ? 1 : 2,
      textAlign: props => props.odd? 'right' : 'left'
    },
    [theme.breakpoints.down("sm")]: {
      order: 2,
      textAlign:'center'
    },
  }
}));

function Experience(props) {
  const theme = useTheme();
  const classes = useStyles(props);
  return (
    <React.Fragment>
      <Grid container alignItems="stretch">
        <Grid item lg={6} md={6} sm={12} xs={12} className={classes.experienceImage}>
          <Box
            height="100%"
            p="4rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={props.image}
              alt={props.alt}
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className={classes.experienceDetials}
        >
          <Box
            height="100%"
            p="4rem"
            bgcolor={theme.palette.primary.main}
            color={theme.palette.white}
          >
            <Title variant="h3" component="p">
              {props.position}
            </Title>
            <Subtitle variant="h5" component="p" gutterBottoms>
              {props.company}
            </Subtitle>
            <Typography variant="overline">{props.time}</Typography>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

// --- Exports --- //
export default Experience;
