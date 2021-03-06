import React from "react";
import Typography from "@material-ui/core/Typography";
import Harris from "../../images/me.jpg";
import clsx from "clsx";
// import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const basicInfoStyles = makeStyles((theme) => ({
    basicInfoLayout: {
        height: "100%",
        position: "relative",
        [theme.breakpoints.up("sm")]:{
            display: "flex",
            justifyContent: "center",
        },
        // Switch to flexbox positioning
        [theme.breakpoints.down("sm")] : {
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexDirection: "column",
        },
    },
    myImage : {
        [theme.breakpoints.up("sm")]:{
            width: "95%",
        },
        [theme.breakpoints.down("sm")]:{
            width: "80%"
        },
    },
    imageContainer : {
        position: "relative",
        [theme.breakpoints.up("sm")]:{
            height: "100%",
            float: "left",
            paddingRight: "50px",
            paddingLeft: "40px",
            paddingTop: "20px",
            paddingBottom: "0px",
            maxWidth: "40%",
        },
        [theme.breakpoints.down("sm")]:{
            float: "none",
            height: "50%",
            padding: 0,
            paddingTop: "20px",
            maxWidth: "100%",
        }
    },
}));

export default ({ styles }) => {
    const parentClass = styles();
    const classes = basicInfoStyles();
    return (<div className={classes.basicInfoLayout}>
    <div className={classes.imageContainer}>
        <img src={Harris} className={classes.myImage}/>
    </div>
    <div className={parentClass.paragraph}><Typography variant="h5" component="h5" className={parentClass.heading}>
        About Myself
    </Typography>
    <Typography variant="body1" component="p">
        I am Harris Zheng, a Third-Year Computer Engineering Student enrolled at UofT.
        I am oddly proficient at learning about things that makes my life easier.    
    </Typography>
    <Typography variant="body1" component="p" style={{paddingTop: "10px"}}>
        <Typography variant="body1" component="li">Front-End Dev</Typography>
        <Typography variant="body1" component="li">Python Scripts</Typography>
        <Typography variant="body1" component="li">Database Administration and SQL Queries</Typography>
        
        <Typography variant="body1" component="p" style={{paddingTop: "10px"}}>
        Through my personal projects and the wonderful education at UofT, I have developed appreciation for technological skills that helps me conquer
        my personal problems. I hope that by advertising myself and getting a job, I can expand my skills to a bigger stage, and emphathize with greater
        problems that I have trouble understanding at the moment. 
        </Typography>

        <Typography variant="body1" component="p" style={{paddingTop: "10px"}}>
        In the light of my upcoming PEY Co-op Term in Summer 2021, I am open to any positions -- preferrably, I would like to start out as a <b>Systems/Database Administrator</b>. 
        </Typography>
    </Typography>
    </div>
    
    </div>)
};