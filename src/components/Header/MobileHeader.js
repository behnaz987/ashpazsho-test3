import React from "react";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";
//import {genericStyles} from "../tools/webResponsive";
import {Container, Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {useBorderRadius, useSize} from "../../tools/mobileResponsive";
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    userLogo: {
        background: 'rgba(255, 54, 74, 0.15)'
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
export default function MobileHeader(props) {
    const genericClasses = genericStyles();
    const classes = useStyles();
    return (
        <Paper
            className={clsx([genericClasses.genericFullWidth, genericClasses.inlineFlex, genericClasses.centerAlignItems, useSize(undefined, 56)])}
        >
            <Container>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item className={genericClasses.inlineFlex}>
                        <Button variant='text' onClick={props.drawerButtonCallback}>
                            <MenuIcon className={clsx([useSize(24, 24)])}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img src={logo} className={useSize(59, 21)} alt='logo'/>
                    </Grid>
                    <Grid item
                          className={clsx([genericClasses.inlineFlex, genericClasses.centerJustifyContent, genericClasses.centerAlignItems])}>
                        <div
                            className={clsx([useSize(42, 36), useBorderRadius(17), classes.userLogo, genericClasses.inlineFlex, genericClasses.centerJustifyContent, genericClasses.centerAlignItems])}>
                            <img src={user} className={useSize(24, 24)} alt='user'/>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
}

MobileHeader.propTypes = {
    drawerButtonCallback: PropTypes.func.isRequired
};
