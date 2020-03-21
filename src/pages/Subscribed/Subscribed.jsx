import React, { useState, useEffect, useRef } from "react";
import Confetti from "../../components/Confetti";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";


import {
  Grid,
  Typography,
  IconButton
} from "@material-ui/core";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

const socialLinks = {
  facebook: "#",
  twitter: "#",
  goFundMe: "#",
}

const useStyles = makeStyles(theme => ({
  main: {
    margin: "3rem 0",
    padding: "0 1rem"
  },
  fullWidth: {
    width: "100%"
  },
  subHeader: {
    margin: "2rem",
    fontWeight: "bold",
    fontFamily: "Caveat"
  },
  body: {
    fontWeight: "lighter",
    margin: "2rem 0"

  },
  flexContainer: {
    display: "flex"
  },
  flexItem: {
    margin: "auto"
  },
  socialBar: {
    width: "80%",
    margin: "auto"
  },
  facebookIcon: {
    color: "#3b5998"
  },
  twitterIcon: {
    color: "#1DA1F2"
  },
  socialBox: {
    margin: "4rem 0"
  },
  socialHeader: {
    color: "#1da1f2"
  }

}));

const INITIAL = 300;
const DECREASE_STEP = -5;

function Subscribed() {
  const classes = useStyles();
  const [numConfetti, setNumConfetti] = useState(INITIAL);

  function useInterval(callback, delay) {

    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    setNumConfetti(numConfetti + DECREASE_STEP);
  }, 1000)

  return (

    <div>
      {
        numConfetti >= 0 ?
          <Confetti numberOfPieces={numConfetti} />
          : ""
      }

      <Grid container justify="center" alignItems="center" className={clsx(classes.main, classes.fullWidth)}>
        <Grid item xs={12}>
          <Typography
            className={clsx(classes.subHeader)}
            variant="h3"
            align="center"
            color="primary"
          >
            Thank you!
          </Typography>
        </Grid>

        <Grid item xs={10} sm={8} md={6} lg={4}>
          <Typography className={classes.body} variant="h2" align="center">
            <img src="./better-friend-emoji.gif" height="128" width="128" border="0" alt="Become a Better Friend" />
          </Typography>
          <Typography className={classes.body} variant="h6" align="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id. In cursus turpis massa tincidunt. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Tincidunt arcu non sodales neque sodales ut etiam sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.
         </Typography>
          <div className={classes.socialBox}>
            <Typography
              className={clsx(classes.subHeader, classes.socialHeader)}
              variant="h4"
              align="center"
              color="primary"
            >
              Stay Connected!
          </Typography>
            <Typography className={classes.body} variant="subtitle1" align="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget velit aliquet sagittis id. In cursus turpis massa tincidunt.
         </Typography>
            <Grid container justify="center" alignItems="center" className={clsx(classes.main, classes.socialBar)}>

              <Grid item xs={4}>
                <div className={classes.flexContainer}>
                  <div className={clsx("hvr-grow-rotate",classes.flexItem)}>
                  <IconButton href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">

                    <FontAwesomeIcon icon={faFacebookF} size={"lg"} className={clsx("hvr-grow-rotate", classes.facebookIcon)} />
                    </IconButton>

                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.flexContainer}>
                  <div className={clsx("hvr-grow-rotate",classes.flexItem)}>
                    <IconButton href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size={"lg"} className={clsx("hvr-grow-rotate", classes.twitterIcon)} />
                    </IconButton>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={classes.flexContainer}>
                  <div className={clsx("hvr-grow-rotate",classes.flexItem)}>
                  <IconButton href={socialLinks.goFundMe} target="_blank" rel="noopener noreferrer" >
                    <img style={{height: "1.5em"}} className={"hvr-grow-rotate"} src="https://image.flaticon.com/icons/svg/2111/2111427.svg" />
                    </IconButton>

                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>

  );
}

export default Subscribed;
