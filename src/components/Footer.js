import React from "react";
import {Grid, makeStyles, Typography} from "@material-ui/core";
import pic2 from '../assets/logo.png'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import {useWidth} from "../tools/tools";

const useStyle = makeStyles(theme => ({
    root: {
        paddingRight: useWidth(677, 'lg'),
        //backgroundImage: `url(${pic})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        [theme.breakpoints.up('lg')]: {
            height: useWidth(737, 'lg'),
        },

    },
    logo: {
        //paddingTop:useWidth(123, 'lg'),
        width: useWidth(242, 'lg'),
        height: useWidth(96, 'lg'),

    },

    title: {
        [theme.breakpoints.up('md')]: {
            fontSize: useWidth(24, 'md'),
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: useWidth(24, 'lg'),
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 24
        },

    },
    body: {
        [theme.breakpoints.up('md')]: {
            fontSize: useWidth(22, 'md'),
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: useWidth(22, 'lg'),
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: 22
        },
    },
}));
export default function Footer(props) {
    const classes = useStyle();
    return (
        <Grid container direction='column' className={classes.root}>
            <Grid item container style={{paddingTop: useWidth(123, 'lg')}}>
                <img src={pic2} className={classes.logo}/>
            </Grid>
            <Grid item container style={{paddingTop: useWidth(73, 'lg')}}>
                <Grid item><RoomOutlinedIcon/></Grid>
                <Grid item style={{paddingLeft: useWidth(13, 'lg'),}}><Typography
                    className={classes.title}>آدرس</Typography></Grid>
                <Grid item style={{paddingLeft: useWidth(51, 'lg')}}><Typography>
                    تهران - خیابان جمهوری- خیابان کارگر جنوبی
                    <br/>
                    نرسیده به میدان پاستور- نبش کوچه سعیدی
                    <br/>
                    پلاک 6- واحد 7
                </Typography></Grid>
                <Grid item style={{paddingLeft: useWidth(83, 'lg')}}>
                    <Typography>لینک شبکه های اجتماعی
                    </Typography>
                </Grid>
            </Grid>
            {/*<Grid item container>*/}
            {/*    <Grid item  style={{flexBasis:'0'}}></Grid>*/}
            {/*    <Grid item container style={{paddingLeft:useWidth(318, 'lg')}}><Typography >لینک شبکه های اجتماعی*/}
            {/*    </Typography></Grid>*/}
            {/*</Grid>*/}
            <Grid item container style={{paddingTop: useWidth(34, 'lg')}}>
                <Grid item><RoomOutlinedIcon/></Grid>
                <Grid item style={{paddingLeft: useWidth(11, 'lg'),}}><Typography className={classes.title}>شماره
                    تماس</Typography></Grid>
                <Grid item style={{paddingLeft: useWidth(51, 'lg')}}><Typography>
                    02166715466
                </Typography></Grid>
                <Grid item style={{paddingLeft: useWidth(300, 'lg')}}>
                    <CallOutlinedIcon/>
                    <Typography>آموزش، کلیپ ها و ترفندهای یک دقیقه ای آموزشی
                    </Typography>
                </Grid>
            </Grid>
            {/*< Grid item container wrap='nowrap' direction='row' >*/}
            {/*    /!*style={{paddingBottom:useWidth(249, 'lg'),paddingTop:useWidth(109, 'lg')}}*!/*/}
            {/*    <Grid item container style={{flexBasis:'0'}}><CallOutlinedIcon/></Grid>*/}
            {/*    <Grid item containerstyle={{flexBasis:'content',paddingLeft:useWidth(15, 'lg')}} wrap='nowrap' ><Typography className={classes.title}>شماره تماس</Typography></Grid>*/}
            {/*    <Grid item container style={{flexBasis:'0'}}><Typography>02166715466</Typography></Grid>*/}
            {/*    <Grid item container style={{flexBasis:'0',paddingLeft:useWidth(330.5, 'lg')}}><CallOutlinedIcon/></Grid>*/}
            {/*    /!*<Grid item container  wrap='nowrap' style={{paddingLeft:useWidth(81, 'lg')}}>*!/*/}
            {/*    /!*    <Typography className={classes.body}>آموزش، کلیپ ها و ترفندهای یک دقیقه ای*!/*/}
            {/*    /!*    آموزشی*!/*/}
            {/*    /!*</Typography>*!/*/}
            {/*    /!*</Grid>*!/*/}
            {/*</Grid>*/}
        </Grid>
    );

}
