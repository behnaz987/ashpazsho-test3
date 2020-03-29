import React from "react";
import {Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import clsx from "clsx";
import {useBorderRadius, useFont, useMargin, useMinWidth, usePadding, useSize} from "../tools/webResponsive";
import CardContent from "@material-ui/core/CardContent";
import clock from '../assets/clock.png'
import DownloadButton from "./DownloadButton";
import {strings} from '../tools/strings';

const useStyles = makeStyles(theme => ({
    bot: {
        padding: '0 !important'
    },
    card: {
        boxShadow: "0 3px 20px rgba(205, 22, 38, 0.16)",
    },
    ccontent: {
        background: 'white',
        transform: 'translateY(-15px)',
    }
}));
export default function FoodCard(props) {
    const {img, title, duration, type} = props;
    const classes = useStyles();
    const {card} = strings;
    return (
        <Card className={clsx([classes.card, useSize(387, undefined)
            , useBorderRadius(60, 60, 60, 60),
            useMargin(25)
        ])}>

            <CardMedia
                className={clsx([useSize(387, 324), useMinWidth(387)])}
                image={img}
            />
            <CardContent className={clsx([useSize(387, undefined), classes.ccontent, useBorderRadius(30, 30)])}>
                <Grid container direction='column' alignItems='center'
                      justify='space-between'> {/* whole card wrapper */}
                    <Grid container item justify='space-between' alignItems='center'
                          style={{height: '100%'}}> {/* first row */}
                        <Grid item className={usePadding(30)}>
                            <Typography style={{color: 'red'}} className={useFont(22, 'medium')}>
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item className={usePadding(30)}>
                            <Button
                                variant='contained'
                                style={{backgroundColor: '#03B40F', color: 'white'}}
                                className={clsx([useSize(98, 40),
                                    useBorderRadius(22),
                                    useMinWidth(34),
                                    useFont(13),
                                    classes.bot])}
                            >
                                {type}

                            </Button>
                        </Grid>
                    </Grid>

                    <Grid item container wrap='nowrap' justify='space-between'> {/* second row */}
                        <Grid item container alignItems='center' style={{width: 'auto'}}>
                            <Grid item className={usePadding(30)}>
                                <img src={clock} alt='clock' className={useSize(23.5, 23.5)}/>
                            </Grid>
                            <Grid item className={usePadding(30)} style={{paddingRight: '10%'}}>
                                <Typography className={useFont(24)}>
                                    {duration}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item className={usePadding(30)}>
                            <Divider orientation='vertical'/>
                        </Grid>
                        <Grid item className={usePadding(30)}>
                            <Typography style={{color: '#03B40F'}} className={clsx([useFont(22)])}>
                                {card.free}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item className={usePadding(30)}> {/* third row */}
                        <DownloadButton/>

                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}
