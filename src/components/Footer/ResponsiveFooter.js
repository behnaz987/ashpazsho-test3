import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import telegram from '../../assets/telegram2.png';
import instagram from '../../assets/instagram2.png'
import enemad from '../../assets/enamad_icon__text_color_blue_1024.png';
import edare from '../../assets/arme-edareh-rangi-1.png';
import call from '../../assets/call.png';
import pin from '../../assets/pin.png'
import resfooter from '../../assets/footer.png'
import {useFont, usePadding, useSize} from "../../tools/mobileResponsive";
import clsx from "clsx";
import {strings} from "../../tools/strings";

const useStyles = makeStyles(theme => ({
    container: {

        backgroundImage: `url(${resfooter})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
    }
}));
export default function ResponsiveFooter() {
    const classes = useStyles();
    const header = strings.footer;
    return (

        <Grid container direction='column' wrap='nowrap' justify={"center"}
              maxWidth={false}
              className={clsx([classes.container, useSize(undefined, 527),
                  usePadding(undefined, undefined, 28.5, undefined)])}
        >
            <Grid item container direction='row'
                  alignContent='center' alignItems='baseline'>{/*first row*/}
                <Grid item>
                    <img src={pin} className={useSize(20, 21)}/>
                </Grid>
                <Grid item>
                    <Typography style={{color: 'white',}} className={useFont(12)}>{header.add}</Typography>
                </Grid>
                <Grid item className={usePadding(undefined, undefined, 12, undefined)}>
                    <Typography style={{color: 'white',}} className={useFont(12, 'medium')}>
                        تهران - خیابان جمهوری- خیابان کارگر جنوبی
                        <br/>
                        نرسیده به میدان پاستور
                        <br/>
                        نبش کوچه سعیدی- پلاک 6- واحد
                        7
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container direction='row' wrap='nowrap'
                  alignContent='center' alignItems='baseline'
                  className={usePadding(36)}> {/*second row*/}
                <Grid item>
                    <img src={call} className={useSize(20, 20)}/>
                </Grid>
                <Grid item>
                    <Typography className={useFont(12)} style={{color: 'white'}}>{header.phone}</Typography>
                </Grid>
                <Grid item className={usePadding(undefined, undefined, 12, undefined)}>
                    <Typography className={useFont(14, 'medium')} style={{color: 'white',}}>
                        {header.phoneNumber}
                    </Typography>
                </Grid>
            </Grid>

            <Grid container item
                  alignContent='center' alignItems='baseline' className={usePadding(30)}>{/*third row*/}
                <Grid item className={useSize(35.8, 35.8)}>
                    <img src={instagram} className={useSize(26.41, 26.41)}/>
                </Grid>
                <Grid item>
                    <Typography className={useFont(12)} style={{color: 'white'}}>
                        {header.tel}
                    </Typography>
                </Grid>

            </Grid>
            <Grid container item
                  alignContent='center' alignItems='baseline' className={usePadding(30)}>{/*fourth row*/}
                <Grid item className={useSize(35.8, 35.8)}>
                    <img src={telegram} className={useSize(21.56, 20.3)}/>
                </Grid>
                <Grid item>
                    <Typography className={useFont(12)} style={{color: 'white'}}>
                        {header.ins}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container
                  direction='row' justify='center'
                  alignItems='baseline' className={usePadding(43)}> {/*fifth row*/}
                <Grid item className={useSize(51, 51)}>
                    <img src={edare}/></Grid>
                <Grid item className={useSize(47, 36)}>
                    <img src={enemad}/>
                </Grid>
            </Grid>
        </Grid>

    );

}
