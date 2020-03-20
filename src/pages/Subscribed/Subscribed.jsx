import React, { useState, useEffect, useRef } from "react";
import Confetti from "../../components/Confetti";

import {
  Grid,
  Typography,
} from "@material-ui/core";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  main: {
    margin: "3rem 0",
    padding: "0 1rem"
  },
  fullWidth: {
    width: "100%"
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

      <Grid container justify="center" alignItems="center" className={clsx(classes.main,classes.fullWidth)}>
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

      </Grid>
    </div>
  
  );
}

export default Subscribed;
