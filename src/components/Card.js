import React from "react";
import {Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import pizza from '../assets/pizza.png'
import Button from "@material-ui/core/Button";
import {strings} from '../tools/strings';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

const useStyles = makeStyles(theme => ({
    root: {
        //flexGrow: 1,
        height: '387px',
        width: '324px',
        //backgroundImage: `url(${pizza})`,
        backgroundRepeat: 'no-repeat'
    },
    card: {
        // backgroundColor:'red'
    },
    img: {
        width: '100%',
        height: '100%',
        radius: '0px'
    }
}));
export default function Card() {
    const classes = useStyles();
    const {card} = strings;
    return (
        <Grid container className={classes.root}>
            <Grid item container wrap='nowrap'>
                <img src={pizza} className={classes.img}/>
            </Grid>
            <Grid item container className={classes.card} direction='column'
                  style={{paddingRight: '9.3%', paddingLeft: '9.3%'}} justify='space-between'>
                <Grid item container direction='row' justify='space-between'>
                    <Grid item>
                        <Typography>
                            {card.pizza}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography>
                            {card.fastFood}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container direction='row' wrap='nowrap' justify='space-between'>
                    <Grid item container direction='row' lg={2} aligncontent='center'>

                        <Grid item lg={6}>
                            <AccessTimeOutlinedIcon fontSize='small'/>
                        </Grid>
                        <Grid item lg={6}>
                            <Typography>1:45</Typography>
                        </Grid>
                    </Grid>
                    <Grid item><Divider orientation='vertical'/></Grid>
                    <Grid item>
                        <Typography>{card.free}</Typography>
                    </Grid>

                </Grid>
                <Grid item container direction='row' justify='center'>
                    <Grid item alignItems='center'>
                        <Button variant='contained' endIcon={<ArrowBackOutlinedIcon style={{backgroundColor: 'red'}}/>}>دانلود
                            رایگان</Button>
                    </Grid>
                </Grid>

            </Grid>
        </Grid>
    );

}
