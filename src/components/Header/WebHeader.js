import React from "react";
import {Container, Paper, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import pic2 from '../../assets/logo.png';
import Grid from "@material-ui/core/Grid";
import {useBorderRadius, useBorderRadiuses, useFont, useMargin, useSize} from "../../tools/webResponsive";
import clsx from "clsx";
import {strings} from "../../tools/strings";
import downArrow from "../../assets/down arrow.png";

const useStyle = makeStyles(theme => ({
    root: {
        boxShadow: '0px 3px 20px rgba(141, 141, 141, 0.38)'
    },
    loginButton: {
        border: '1px solid #CD1626',
        color: '#CD1626',
    },
    signUpButton: {
        backgroundColor: '#FF364A',
        color: 'white',
    },
    container: {
        height: '100%',
    }
}));
export const genericStyles = makeStyles(theme => ({
    genericFullWidth: {
        width: '100%'
    },
    ltr: {
        flip: false,
        textAlign: 'left',
        direction: 'ltr',
    },
    inlineFlex: {
        display: 'inline-flex'
    },
    centerJustifyContent: {
        justifyContent: 'center'
    },
    genericAutoWidth: {
        width: 'auto'
    },
    centerAlignItems: {
        alignItems: 'center'
    },
    flexEndJustifyContent: {
        justifyContent: 'flex-end'
    }
}));
export default function WebHeader(props) {
    const classes = useStyle();
    const genericClasses = genericStyles();
    const drawer = strings.drawer;

    return (
        <Paper
            className={clsx([useMargin(0, 73), genericClasses.genericFullWidth, genericClasses.inlineFlex, genericClasses.centerAlignItems, useSize(undefined, 169), useBorderRadiuses('0', '0', 50, 50), classes.root])}
        >
            <Container>
                <Grid container wrap='nowrap' alignItems='center'
                      justify='space-between'> {/* whole WebHeader wrapper */}
                    <Grid item className={genericClasses.inlineFlex}>
                        <img src={pic2} className={useSize(145, 51)} alt='logo'/>
                    </Grid>
                    <Grid item container justify='space-between' wrap='nowrap' className={useMargin(0, 0, 94)}>
                        <Grid item>
                            <Typography className={useFont(22, 'medium')} noWrap>
                                {drawer.mainPage}
                            </Typography>
                        </Grid>
                        <Grid item container wrap='nowrap' alignItems='center'
                              className={genericClasses.genericAutoWidth}>
                            <Grid item>
                                <Typography className={useFont(22, 'medium')} noWrap>
                                    {drawer.learningCourses}
                                </Typography>
                            </Grid>
                            <Grid item className={genericClasses.inlineFlex}>
                                <img src={downArrow} alt='downArrow' className={useSize(24, 24)}/>
                            </Grid>
                        </Grid>
                        <Grid item container wrap='nowrap' alignItems='center'
                              className={genericClasses.genericAutoWidth}>
                            <Grid item>
                                <Typography className={useFont(22, 'medium')} noWrap>
                                    {drawer.learningClips}
                                </Typography>
                            </Grid>
                            <Grid item className={genericClasses.inlineFlex}>
                                <img src={downArrow} alt='downArrow' className={useSize(24, 24)}/>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography className={useFont(22, 'medium')} noWrap>
                                {drawer.contactUs}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography className={useFont(22, 'medium')} noWrap>
                                {drawer.aboutUs}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container wrap='nowrap' className={genericClasses.genericAutoWidth}>
                        <Grid item>
                            <Button
                                variant="outlined"
                                className={clsx([classes.loginButton, useMargin(undefined, undefined, 162, 46), useSize(164, 72), useBorderRadius(36), useFont(24, 'medium')])}
                            >
                                {drawer.login}
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant='contained'
                                    className={clsx([classes.signUpButton, useSize(164, 72), useBorderRadius(36), useFont(24, 'medium')])}>
                                {drawer.signUp}
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
}
