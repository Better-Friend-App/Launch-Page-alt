import React, { useState, useEffect, useRef } from "react";
import Confetti from "../../components/Confetti";
import ShareBar from "../../components/ShareBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";



import {
  Grid,
  Typography,
  IconButton
} from "@material-ui/core";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

// Links to social media pages
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
    margin: "1.5rem 0"

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

// Number of initial pieces/round
const INITIAL = 300;
// Number of pieces to decrease for each round every second
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
            Thank you! With your help, we are one step closer to our mission to increase connectedness, & radically improve the quality of people's relationships. If you'd like, stay connected with us on our social media!
         </Typography>

          <Grid container justify="center" alignItems="center" className={clsx(classes.main, classes.socialBar)}>

            <Grid item xs={4}>
              <div className={classes.flexContainer}>
                <div className={clsx("hvr-grow-rotate", classes.flexItem)}>
                  <IconButton href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">

                    <FontAwesomeIcon icon={faFacebookF} size={"lg"} className={clsx("hvr-grow-rotate", classes.facebookIcon)} />
                  </IconButton>

                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.flexContainer}>
                <div className={clsx("hvr-grow-rotate", classes.flexItem)}>
                  <IconButton href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size={"lg"} className={clsx("hvr-grow-rotate", classes.twitterIcon)} />
                  </IconButton>
                </div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className={classes.flexContainer}>
                <div className={clsx("hvr-grow-rotate", classes.flexItem)}>
                  <IconButton href={socialLinks.goFundMe} target="_blank" rel="noopener noreferrer" >
                    <img style={{ height: "1.5em" }} className={"hvr-grow-rotate"} src="https://image.flaticon.com/icons/svg/2111/2111427.svg" />
                  </IconButton>

                </div>
              </div>
            </Grid>
          </Grid>

          <div>
            <Typography
              className={clsx(classes.subHeader, classes.socialHeader)}
              variant="h4"
              align="center"
              color="primary"
            >
              Spread the Word!
          </Typography>
            <Typography className={classes.body} variant="subtitle1" align="center">
              We still have room left in our early access programs. If you have friends or family you think  would be interested in improving the quality of their relationships, let them know using the links below.
         </Typography>
            <div className={classes.flexContainer}>
              <div className={classes.flexItem}>
                <ShareBar />
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>

  );
}

export default Subscribed;
