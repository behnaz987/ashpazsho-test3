import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import telegram from '../assets/Group 17903.png';
import enemad from '../assets/enamad_icon__text_color_blue_1024.png';
import edare from '../assets/arme-edareh-rangi-1.png';
import call from '../assets/call.png';
import pin from '../assets/pin.png'
import resfooter from '../assets/footer.png'
import {useSize} from "../tools/tools";
import FlexBoxContainer from "../tools/FlexBoxContainer";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        height: 'auto',
        //backgroundImage: `url(${resfooter})`,
        backgroundSize: 'cover',
        //paddingTop:'7.77%',
        //paddingLeft:'7.88%',
        //backgroundRepeat:'no-repeat'
        //backgroundImage: `url(${resfooter})`,
    },
    container: {
        minHeight: '100vh',
        height: useSize(360, 527).height,
        width: useSize(360, 527).width,
        backgroundImage: `url(${resfooter})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
}));
export default function ResponsiveFooter() {
    const classes = useStyles();
    return (
        <FlexBoxContainer justifyContent='flex-end' className={classes.container}>
            <Grid container direction='column' className={classes.root}>
                {/*<Grid item container direction='row'  >*/}
                {/*    <Grid item >*/}
                {/*        /!*<RoomOutlinedIcon style={{color: 'white'}}/>*!/*/}
                {/*        <img src={pin}/>*/}
                {/*    </Grid>*/}
                {/*    <Grid item style={{paddingRight:'1.38%'}} >*/}
                {/*        <Typography style={{color: 'white',}}>آدرس</Typography>*/}
                {/*    </Grid>*/}
                {/*    <Grid item style={{paddingRight:'3.33%'}}>*/}
                {/*        <Typography style={{color: 'white',}}>*/}
                {/*            تهران - خیابان جمهوری- خیابان کارگر جنوبی*/}
                {/*            <br/>*/}
                {/*            نرسیده به میدان پاستور*/}
                {/*            <br/>*/}
                {/*            نبش کوچه سعیدی- پلاک 6- واحد*/}
                {/*            7*/}
                {/*        </Typography>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}

                {/*<Grid item container direction='row' wrap='nowrap' style={{paddingTop:'6.83%'}}  >*/}
                {/*    <Grid item >*/}
                {/*        /!*<RoomOutlinedIcon style={{color: 'white'}}/>*!/*/}
                {/*        <img src={call}/>*/}
                {/*    </Grid>*/}
                {/*    <Grid item  style={{paddingRight:'1.38%',flexBasis:'content' }} >*/}
                {/*        <Typography style={{color:'white'}}>شماره تماس</Typography>*/}
                {/*    </Grid>*/}
                {/*    <Grid item style={{paddingRight:'4.44%'}}>*/}
                {/*        <Typography style={{color: 'white',}}>*/}
                {/*            02166715466*/}
                {/*        </Typography>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}

                {/*<Grid container item>*/}
                {/*    <Grid item>*/}
                {/*        <img src={telegram}/>*/}
                {/*    </Grid>*/}
                {/*    <Grid item style={{paddingRight:'3.33%'}}>*/}
                {/*        <Typography style={{color: 'white'}}>*/}
                {/*            نکات و ترفندهای آموزش + تخفیف های ویژه*/}
                {/*        </Typography>*/}
                {/*    </Grid>*/}

                {/*</Grid>*/}
                {/*<Grid container item>*/}
                {/*    <Grid item>*/}
                {/*        <img src={telegram}/>*/}
                {/*    </Grid>*/}
                {/*    <Grid item>*/}
                {/*        <Typography style={{color: 'white'}}>*/}
                {/*            آموزش، کلیپ ها و ترفندهای یک دقیقه ای آموزشی*/}
                {/*        </Typography>*/}
                {/*    </Grid>*/}
                <Grid item container direction='row'>
                    <Grid item>
                        {/*<RoomOutlinedIcon style={{color: 'white'}}/>*/}
                        <img src={pin}/>
                    </Grid>
                    <Grid item>
                        <Typography style={{color: 'white',}}>آدرس</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{color: 'white',}}>
                            تهران - خیابان جمهوری- خیابان کارگر جنوبی
                            <br/>
                            نرسیده به میدان پاستور
                            <br/>
                            نبش کوچه سعیدی- پلاک 6- واحد
                            7
                        </Typography>
                    </Grid>
                </Grid>

                <Grid item container direction='row' wrap='nowrap'>
                    <Grid item>
                        {/*<RoomOutlinedIcon style={{color: 'white'}}/>*/}
                        <img src={call}/>
                    </Grid>
                    <Grid item>
                        <Typography style={{color: 'white'}}>شماره تماس</Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{color: 'white',}}>
                            02166715466
                        </Typography>
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
                <Grid item container direction='row' justify='flex-end'
                      style={{paddingLeft: '20%', paddingTop: '8.15%'}}>
                    <Grid item>
                        <img src={edare}/></Grid>
                    <Grid item>
                        <img src={enemad}/>
                    </Grid>
                </Grid>
            </Grid>
        </FlexBoxContainer>
    );

}
