import React from "react";
import {Drawer} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import logo from '../assets/logo.png';
import {useFont, usePadding, useSize} from "../tools/mobileResponsive";
import Typography from "@material-ui/core/Typography";
import {appName, colors, genericStyles, strings} from '../tools/strings';
import Divider from "@material-ui/core/Divider";
import PropTypes from 'prop-types';
import Grid from "@material-ui/core/Grid";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import clsx from "clsx";
import {makeStyles} from "@material-ui/styles";

const colorStyles = makeStyles(theme => colors);

export default function MobileDrawer(props) {
    const {open, setOpen} = props;
    const {drawer} = strings;
    const genericClasses = genericStyles();
    const colorClasses = colorStyles();
    const [coursesOpen, setCoursesOpen] = React.useState(false);
    const [clipsOpen, setClipsOpen] = React.useState(false);
    return (
        <Drawer anchor='left' onClose={() => setOpen(false)} open={open}>
            <List>
                <ListItem disableRipple>
                    <Container>
                        <Grid container direction='column' alignItems='center'>
                            <Grid item>
                                <img src={logo} alt='logo' className={useSize(103, 36)}/>
                            </Grid>
                            <Grid item>
                                <Typography className={useFont(12, 'medium')}>
                                    {appName}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </ListItem>
                <Divider variant='middle'/>
                <ListItem button className={genericClasses.flexStartJustifyContent}>
                    <Typography className={useFont(14, 'medium')}>
                        {drawer.signInUp}
                    </Typography>
                </ListItem>
                <ListItem button className={genericClasses.flexStartJustifyContent}>
                    <Typography className={useFont(14, 'medium')}>
                        {drawer.mainPage}
                    </Typography>
                </ListItem>
                <ListItem
                    button
                    className={genericClasses.flexStartJustifyContent}
                    onClick={() => setCoursesOpen(prevState => !prevState)}
                >
                    {coursesOpen ? <ExpandLess/> : <ExpandMore/>}
                    <Typography className={useFont(14, 'medium')}>
                        {drawer.learningCourses}
                    </Typography>
                </ListItem>
                <Collapse in={coursesOpen} timeout="auto" unmountOnExit addEndListener={() => {
                }}>
                    <List component="div" disablePadding>
                        <ListItem button
                                  className={clsx([colorClasses.backgroundGrayColor, genericClasses.flexStartJustifyContent, usePadding(0, 0, 19)])}>
                            <Typography className={useFont(14)}>
                                {drawer.presentment}
                            </Typography>
                        </ListItem>
                        <Divider/>
                        <ListItem button
                                  className={clsx([colorClasses.backgroundGrayColor, genericClasses.flexStartJustifyContent, usePadding(0, 0, 19)])}>
                            <Typography className={useFont(14)}>
                                {drawer.online}
                            </Typography>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem
                    button
                    className={genericClasses.flexStartJustifyContent}
                    onClick={() => setClipsOpen(prevState => !prevState)}
                >
                    {clipsOpen ? <ExpandLess/> : <ExpandMore/>}
                    <Typography className={useFont(14, 'medium')}>
                        {drawer.learningClips}
                    </Typography>
                </ListItem>
                <Collapse in={clipsOpen} timeout="auto" unmountOnExit addEndListener={() => {
                }}>
                    <List component="div" disablePadding>
                        <ListItem
                            button
                            className={clsx([colorClasses.backgroundGrayColor, genericClasses.flexStartJustifyContent, usePadding(0, 0, 19)])}
                        >
                            <Typography className={useFont(14)}>
                                {drawer.presentment}
                            </Typography>
                        </ListItem>
                        <Divider/>
                        <ListItem button
                                  className={clsx([colorClasses.backgroundGrayColor, genericClasses.flexEndJustifyContent, usePadding(0, 0, 19)])}>
                            <Typography className={useFont(14)}>
                                {drawer.online}
                            </Typography>
                        </ListItem>
                    </List>
                </Collapse>
                <ListItem button className={genericClasses.flexStartJustifyContent}>
                    <Typography className={useFont(14, 'medium')}>
                        {drawer.recommendationsAndOffers}
                    </Typography>
                </ListItem>
                <ListItem button className={genericClasses.flexStartJustifyContent}>
                    <Typography className={useFont(14, 'medium')}>
                        {drawer.aboutUs}
                    </Typography>
                </ListItem>
                <ListItem button className={genericClasses.flexStartJustifyContent}>
                    <Typography className={useFont(14, 'medium')}>
                        {drawer.contactUs}
                    </Typography>
                </ListItem>
                <ListItem button className={genericClasses.flexStartJustifyContent}>
                    <Typography style={{color: 'red'}} className={clsx([useFont(14, 'medium')])}>
                        {drawer.exit}
                    </Typography>
                </ListItem>
            </List>
        </Drawer>
    );
}

MobileDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
};
