import React from "react";
import {Grid, makeStyles, Typography} from "@material-ui/core";
import logo from '../../assets/logo.png';
import pic from '../../assets/1.png';
import call from '../../assets/call.png';
import pin from '../../assets/pin.png';
import tel from '../../assets/telegram.png';
import ins from '../../assets/instagram.png';
import edare from '../../assets/arme-edareh-rangi-1.png';
import enamad from '../../assets/enamad_icon__text_color_blue_1024.png';
import {useFont, usePadding, useSize, useWidth} from "../../tools/webResponsive";
import clsx from "clsx";
import {strings} from "../../tools/strings";

const useStyle = makeStyles(theme => ({
    root: {
        backgroundImage: `url(${pic})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        paddingTop: useWidth(123, 'lg'),
        flexWrap: 'nowrap',
    },
    logo: {
        width: '100%',
        height: '100%'

    },
    content: {
        color: 'white'
    },

}));
export default function WebFooter(props) {
    const classes = useStyle();
    const footer = strings.footer;
    return (
        <Grid
            container justify={"flex-end"} direction='row' wrap='nowrap'
            className={clsx([useSize(undefined, 737), classes.root])}
        >
            <Grid item container wrap='nowrap' direction='column' xs={4} sm={4} lg={4} xl={4} md={4}> {/*first column*/}
                <Grid item className={clsx([useSize(242, 96),])}>{/*first row*/}
                    <img src={logo} className={classes.logo}/>
                </Grid>

                <Grid item container wrap='nowrap' spacing={2}
                      className={clsx([usePadding(72)])} alignContent='center' alignItems='baseline'
                > {/*second row*/}
                    <Grid item>
                        <img src={pin} className={clsx([useSize(48, 48)])}/>
                    </Grid>
                    <Grid item className={clsx([useFont(24, 'medium'), classes.content])}>
                        <Typography>
                            {footer.add}
                        </Typography>
                    </Grid>
                    <Grid item className={clsx([useFont(24, 'medium'), classes.content,])}>
                        <Typography>
                            تهران - خیابان جمهوری- خیابان کارگر جنوبی-
                            <br/>
                            نرسیده به میدان پاستور- نبش کوچه سعیدی-
                            <br/>
                            پلاک 6- واحد 7
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item container wrap='nowrap' spacing={2}
                    className={clsx([usePadding(34)])} alignContent='center' alignItems='baseline'
                > {/*third row*/}
                    <Grid item>
                        <img src={call} className={clsx([useSize(48, 48)])}/>
                    </Grid>
                    <Grid item className={clsx([useFont(24, 'medium'), classes.content])}>
                        <Typography>
                            {footer.phone}
                        </Typography>
                    </Grid>
                    <Grid item className={clsx([useFont(24, 'medium'), classes.content])}>
                        <Typography>
                            {footer.phoneNumber}
                        </Typography>
                    </Grid>
                </Grid>


            </Grid>
            <Grid item wrap='nowrap' container xs={4} sm={4} lg={4} xl={4} md={4}
                  style={{paddingTop: '8%'}}
                  justify='flex-start'
                  direction='column' spacing={4}> {/*second column*/}
                <Grid item className={clsx([useFont(24, 'medium'), classes.content])}> {/*first row*/}
                    <Typography>
                        {footer.socialMedia}
                    </Typography>
                </Grid>
                <Grid item container wrap='nowrap' alignItems='baseline' spacing={2}> {/*second row*/}
                    <Grid item>
                        <img src={tel} className={clsx([useSize(52.47, 45.22)])}/>
                    </Grid>
                    <Grid item className={clsx([useFont(24, 'medium'), classes.content])}>
                        <Typography noWrap>
                            {footer.tel}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container wrap='nowrap' alignItems='baseline' spacing={2}>{/*third row*/}
                    <Grid item>
                        <img src={ins} className={clsx([useSize(42, 42)])}/>
                    </Grid>
                    <Grid item className={clsx([useFont(24, 'medium'), classes.content])}>
                        <Typography noWrap='noWrap'>
                            {footer.ins}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container wrap='nowrap' spacing={2} alignItems='baseline'> {/*fourth row*/}
                    <Grid item>
                        <img src={enamad} className={clsx([useSize(95, 95)])}/>

                    </Grid>
                    <Grid item>
                        <img src={edare} className={clsx([useSize(77, 60)])}/>
                    </Grid>
                </Grid>
                </Grid>
        </Grid>
    );

}
