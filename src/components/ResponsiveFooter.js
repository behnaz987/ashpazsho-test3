import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import telegram from '../assets/Group 17903.png';
import enemad from '../assets/enamad_icon__text_color_blue_1024.png';
import edare from '../assets/arme-edareh-rangi-1.png';
import resfooter from '../assets/resfooter.png'

const useStyles = makeStyles(theme => ({
    root: {
        //flexGrow: 1,
        height: '527px',
        width: '360px',
        backgroundImage: `url(${resfooter})`,
    },
}));
export default function ResponsiveFooter() {
    const classes = useStyles();
    return (
        <Grid container direction='column' className={classes.root}>
            <Grid item container direction='row' style={{paddingTop: '41px'}}>
                <Grid item style={{flexBasis: '0'}}>
                    <RoomOutlinedIcon style={{color: 'white'}}/>
                </Grid>
                <Grid item style={{flexBasis: '0'}}>
                    <p style={{color: 'white'}}>آذرس</p>
                </Grid>
                <Grid item style={{flexBasis: "50%", paddingLeft: '1%'}}>
                    <p style={{color: 'white'}}>
                        تهران - خیابان جمهوری- خیابان کارگر جنوبی- نرسیده به میدان پاستور- نبش کوچه سعیدی- پلاک 6- واحد
                        7
                    </p>
                </Grid>
            </Grid>

            <Grid container item>
                <Grid item>
                    <CallOutlinedIcon style={{color: 'white'}}/>
                </Grid>
                <Grid item>
                    <p style={{color: 'white'}}> تماس</p>
                </Grid>
                <Grid item style={{flexBasis: "auto", paddingLeft: '1%'}}>
                    <p style={{color: 'white'}}>
                        02166715466
                    </p>
                </Grid>
            </Grid>

            <Grid container item>
                <Grid item>
                    <img src={telegram}/>
                </Grid>
                <Grid item>
                    <Typography style={{color: 'white'}}>
                        نکات و ترفندهای آموزش + تخفیف های ویژه
                    </Typography>
                </Grid>

            </Grid>
            <Grid container item>
                <Grid item>
                    <img src={telegram}/>
                </Grid>
                <Grid item>
                    <Typography style={{color: 'white'}}>
                        آموزش، کلیپ ها و ترفندهای یک دقیقه ای آموزشی
                    </Typography>
                </Grid>

            </Grid>
            <Grid item container direction='row' justify='flex-end' style={{paddingRight: '10%'}}>
                <Grid item>
                    <img src={edare}/></Grid>
                <Grid item>
                    <img src={enemad}/>
                </Grid>
            </Grid>
        </Grid>
    );

}
