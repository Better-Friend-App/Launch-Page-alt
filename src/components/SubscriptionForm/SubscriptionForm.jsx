import React, { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import flags from "../../flags";

import {
  Grid,
  Typography,
  TextField,
  Button
} from "@material-ui/core";

import HandIcon from "@material-ui/icons/PanTool";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  fullWidth: {
    width: "100%"
  },
  flex: {
    display: "flex"
  },
  flexCenter: {
    margin: "auto"
  },
  submit: {
    margin: "2rem 0rem"
  },
  emojiStatus: {
    fontSize: "80px"
  },
  input: {
    background: "white"
  },
  status: {
    margin: "1rem 0"
  }
}));

const mailchimpUrl =
  "https://betterfriendapp.us4.list-manage.com/subscribe/post?u=b9495e03a31ea97485ed32c15&amp;id=8b96342f9e";

  function SubscriptionForm(props) {
    const classes = useStyles();

    const { handleStatus, history } = props;

    const CustomForm = ({ formStatus, message, onValidated, handleStatus }) => {
        const invalidEmailMsg = "Please enter a valid email!";
    
        const [status, setStatus] = useState("");
        const [statusMessage, setStatusMessage] = useState("");
        const [form, setForm] = useState({});
        const [errors, setErrors] = useState({});
    
        const submitForm = () => {
          // HANDLE ERROR VALIDATION
          if (!form["EMAIL"].includes("@")) {
            let tmp = { ...errors };
            tmp["EMAIL"] = invalidEmailMsg;
            setErrors({ ...tmp });
          }
    
          // IF NO ERRORS, SEND TO onValidated()
          else {
            onValidated(form);
            
          }
        };
    
        const handleFormChange = e => {
          const { name, value } = e.target;
          let tmp = { ...form };
          tmp[name] = value;
    
          setForm({ ...tmp });
    
          // RESET ERRORS
          setErrors({});
        };
    
        useEffect(() => {
          
          let tmp = formStatus;
    
          if (message) {
            if (message.includes("email address is invalid"))
              setStatusMessage("Seems your email address is invalid...");
            else if (message.includes("many"))
              setStatusMessage(
                "Seems you've been trying to sign up too many times..."
              );
            else if (message.includes("already subscribed") || formStatus === "success") {
              // Set flag in local storage that user has subscribed
              localStorage.setItem(flags.subscribed, "true");
                
              // Redirect to subscribed page
              history.replace("/subscribed");
            }
          }
          setStatus(tmp);
          handleStatus(tmp);
    
    
        }, [formStatus, message]);
    
        return (
          <Grid container spacing={1}>
            <Grid item xs={12} sm={5}>
              <div className={classes.flex}>
                <div className={classes.flexCenter}>
                  <div>
                    <div className={classes.flex}>
                      <div className={classes.flexCenter}>
                        <span
                          style={{ width: "100%" }}
                          className={clsx(classes.flexCenter, classes.emojiStatus)}
                        >
                          {
                          //   status === "subscribed" ? (
                          //   <span role="img" aria-label="face with hearts emoji">
                          //     🥰
                          //   </span>
                          // ) : status === "success" ? (
                          //   <span role="img" aria-label="party emoji">
                          //     🥳
                          //   </span>
                          //   ) :
                              status === "error" ? (
                            <span role="img" aria-label="investigate emoji">
                              🧐
                            </span>
                          ) : (
                            <span role="img" aria-label="cheery emoji">
                              😄
                            </span>
                          )}
                        </span>
                      </div>
                    </div>
                    <Typography
                      className={classes.status}
                      align="center"
                      variant="caption"
                      component="p"
                    >
                      {statusMessage || ""}
                    </Typography>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={7}>
              <TextField
                autoComplete="off"
                label="Name"
                onChange={handleFormChange}
                name="NAME"
                placeholder="Firstname Lastname"
                fullWidth
                variant="outlined"
                margin="normal"
                className={classes.input}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                autoComplete="off"
                label="Email"
                placeholder="You@domain.com"
                onChange={handleFormChange}
                name="EMAIL"
                error={errors["EMAIL"] ? true : false}
                helperText={errors["EMAIL"] || ""}
                type="email"
                fullWidth
                variant="outlined"
                margin="normal"
                className={classes.input}
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12} className={clsx(classes.submit, classes.flex)}>
              <div className={classes.flexCenter}>
                <Button
                  onClick={submitForm}
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ backgroundColor: "#ffbd44" }}
                  startIcon={<HandIcon />}
                >
                  Sign me up
                </Button>
              </div>
            </Grid>
          </Grid>
        );
      };
    

    return (
    <MailchimpSubscribe
    url={mailchimpUrl}
    render={({ subscribe, status, message }) => (
      <CustomForm
        handleStatus={handleStatus}
        formStatus={status}
        message={message}
        onValidated={formData => subscribe(formData)}
      />
    )}
    
  />
    )
  }

  export default SubscriptionForm;