// --- Imports --- //
import React from "react";

// --- Material Ui Imports  --- //
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useTheme from "@material-ui/core/styles/useTheme";

// --- Custom Component Imports -- //
import { Title, Subtitle } from "../../../../components";

// --- Image imports --- //

function Experience(props) {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Grid container alignItems="stretch">
        <Grid lg={6} md={6} sm={12} xs={12}>
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
              style={{ maxHeight: "100%", maxWidth:"100%" }}
            />
          </Box>
        </Grid>
        <Grid
          lg={6}
          md={6}
          sm={12}
          xs={12}
          justify="center"
          alignItems="center"
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
