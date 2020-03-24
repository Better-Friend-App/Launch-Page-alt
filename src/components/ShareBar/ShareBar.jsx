import React from "react";

import {
    EmailShareButton,
    EmailIcon,
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    RedditShareButton,
    RedditIcon,
    TwitterShareButton,
    TwitterIcon,
} from "react-share";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx"

const useStyles = makeStyles(theme => ({
    socialBar: {
        margin: "1.5rem 0",

    },
    socialButton: {
        marginRight: "1rem"
    }
}));

const PAGE_URL = "https://betterfriendapp.com/";
const SHARE_SIZE = 40;

function ShareBar() {
    const classes = useStyles();


    return (

        <div className={classes.socialBar}>
            <FacebookShareButton className={clsx(classes.socialButton, "hvr-bounce-in")} url={PAGE_URL} ><FacebookIcon size={SHARE_SIZE} round /></FacebookShareButton>
            <TwitterShareButton className={clsx(classes.socialButton, "hvr-bounce-in")} url={PAGE_URL} ><TwitterIcon size={SHARE_SIZE} round /></TwitterShareButton>
            <LinkedinShareButton className={clsx(classes.socialButton, "hvr-bounce-in")} url={PAGE_URL} ><LinkedinIcon size={SHARE_SIZE} round /></LinkedinShareButton>
            <RedditShareButton className={clsx(classes.socialButton, "hvr-bounce-in")} url={PAGE_URL} ><RedditIcon size={SHARE_SIZE} round bgStyle={{ fill: "#ff4500" }} /></RedditShareButton>
            <EmailShareButton className={clsx(classes.socialButton, "hvr-bounce-in")} url={PAGE_URL} ><EmailIcon size={SHARE_SIZE} round /></EmailShareButton>
        </div>

    );
}

export default ShareBar;
