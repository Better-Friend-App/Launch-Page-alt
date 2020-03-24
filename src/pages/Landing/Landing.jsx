import React, { useState, useEffect } from "react";
import SubscriptionForm from "../../components/SubscriptionForm"
import flags from "../../flags";

import ShareBar from "../../components/ShareBar"

import {
  Grid,
  Typography,
  Paper,
} from "@material-ui/core";

import { Alert, AlertTitle } from "@material-ui/lab"

import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  main: {
    padding: "2rem"
  },
  header: {
    margin: "2rem",
    color: "#1A237E"
  },
  subHeader: {
    margin: "2rem",
    fontWeight: "bold",
    color: "#373D3F"
  },
  subscriptionBox: {
    padding: "2rem",
    margin: "5rem 0 1rem 0",
    backgroundColor: "azure"
  },
  body: {
    fontSize: "1.6rem"
  },
  content: {
    margin: "2rem 0rem",
    color: "#373D3F",
    fontWeight: "lighter"
  },
  quote: {
    fontStyle: "italic",
    margin: "2rem 0rem",
    fontSize: "1.2rem"
  },
  closing: {
    fontFamily: "Caveat"
  },
  subscriptionHeader: {
    fontSize: "1.4rem"
  },
  subscriberAlert: {
    margin: "2rem 2rem 0 2rem",
    padding: "0.5rem"
  },
  divider: {
    margin: "5rem 0rem"
  },
  fullWidth: {
    width: "100%"
  },
  subscribedEmail: {
    fontWeight: "bold",
    display: "contents"

  }
}));

function Landing(props) {
  const classes = useStyles();
  const [alertOpen, setAlertOpen] = useState(false);

  const { history } = props;

  useEffect(() => {
    // Check local storage for subscribed flag
    if (localStorage.getItem(flags.subscribed) === "true") {
      // Perform action (show user snackbar)
      setAlertOpen(true);
    }

  }, [])

  return (

    <div>
      {
        alertOpen ?
          <Alert severity="info" className={classes.subscriberAlert} >
            <AlertTitle>You are subscribed!</AlertTitle>
            <span className={classes.subscribedEmail}>{localStorage.getItem(flags.subscribedEmail)}</span> is subscribed to the Better Friend waitlist.
        </Alert>
          : ""
      }
      <Grid
        container
        alignItems="center"
        justify="center"
        className={classes.main}
      >
        {/* <Grid item xs={12} sm={10} md={8} lg={6} xl={4}> */}
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <Typography className={classes.header} variant="h2" align="center">
            <img src="./better-friend-emoji.gif" height="128" width="128" border="0" alt="Become a Better Friend" />
          </Typography>

          <Typography
            className={clsx(classes.subHeader)}
            variant="h5"
            align="center"
          >
            Let’s talk about social media.
          </Typography>

          <Typography
            variant="body1"
            className={clsx(classes.body, classes.content)}
          >
            Humans have created an unhealthy relationship with technology. Addiction, mental health, and loneliness are bigger problems than ever, and there’s proven scientific data pointing to social media as the culprit.{" "}
            <span role="img" aria-label="mind blown emoji">
              🤯
            </span>
            .
          </Typography>

          <Typography
            variant="body1"
            className={clsx(classes.body, classes.content)}
          >
            There has to be a way to cut out the noise, know about what's important, and support the well-being of ourselves and others. We need a solution to create time for meaningful, shared experiences with others without creating more work for ourselves.
          </Typography>

          <Typography
            variant="body1"
            className={clsx(classes.body, classes.content)}
          >
            <span className="strong">At Better Friend, we’re on a mission to <em>enhance humanity</em>.</span>
          </Typography>

          <Typography
            variant="body1"
            className={clsx(classes.body, classes.content)}
          >
            We've created a <span className="underline">smart</span>, <span className="underline">easy</span> to use solution that will enable you to build and strengthen your relationships with people you know (and those you should know) so that you can <em>live a better life</em> <span role="img" aria-label="nerd emoji">
              🤓
            </span>{" "}.
          </Typography>

          <Typography
            variant="body1"
            className={clsx(classes.body, classes.content)}
          >
            We ask you to give us your email so that we can let you know when and how you can start using Better Friend.
          </Typography>

          <Typography
            variant="body1"
            className={clsx(classes.body, classes.content)}
          >
            Access is limited. Only the first 100 signups will get access, so don't delay!{" "}
            <span role="img" aria-label="rocket emoji">
              🚀
            </span>{" "}
            .
          </Typography>
          <div className={classes.divider}>
            <Typography variant="h5" className={classes.closing}>
              Sincerely,
            </Typography>
            <Typography variant="h4" className={classes.closing}>
              the Better Friend team{" "}
              <span role="img" aria-label="heart emoji">
                ❤️
              </span>
            </Typography>

            {/* SOCIAL SHARING BUTTONS */}
            <ShareBar />

            <Paper elevation={7} className={classes.subscriptionBox}>
              <Typography variant="overline" align="center" component="p" className={classes.subscriptionHeader}>
                Stay Updated
            </Typography>
              <SubscriptionForm history={history} />
            </Paper>

          </div>
        </Grid>
      </Grid>
    </div>

  );
}

export default Landing;
