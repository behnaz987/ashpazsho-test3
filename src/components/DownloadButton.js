import React from "react";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";
import {useBorderRadius, useFont, useSize} from "../tools/webResponsive";
import {strings} from "../tools/strings";
import arrow from '../assets/arrow-pointing-to-right.png'

const useStyles = makeStyles(theme => ({
    button: {
        color: '#000000',
        justifyContent: 'flex-start',
        background: '#FFDD00',
        display: 'flex',
    },

    arrow: {
        display: 'inline-flex',
        background: '#FEE961',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexBasis: 'content'
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '9%'
    }
}));

export default function DownloadButton() {
    const classes = useStyles();
    const card = strings.card;
    return (
        <div className={clsx([classes.button, useSize(235, 64), useBorderRadius(18), useFont(24, 'medium')])}>
            <div className={clsx([useSize(69, undefined), classes.arrow, useBorderRadius(18)])}>
                <img src={arrow} alt='rightArrow' className={clsx([useSize(30.44, 20.95)])}/>
            </div>
            <div className={classes.content}>{card.freeDownload}</div>
        </div>
    );


}
