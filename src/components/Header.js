import React from "react";
import {Container, Typography} from "@material-ui/core";
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import Button from "@material-ui/core/Button";
import {makeStyles} from '@material-ui/core/styles';
import pic2 from '../assets/logo.png'

const useStyle = makeStyles(theme => ({
    root: {
        //flexGrow: 1,
        width: '100vw',
        height: '169px',
        //backgroundColor:'blue',
        borderBottomRightRadius: '40px',
        borderBottomLeftRadius: '40px',
        boxShadow: '0px 3px 20px'
    },
    logo: {
        width: '145px',
        height: '51px'
    },
    button: {
        width: '131.2px',
        height: '57.70px',
        borderRadius: '36px',

    },
    container: {
        height: '100%',


    }


}));
export default function Header(props) {
    const classes = useStyle();
    return (
        <Container className={classes.root}>
            <FlexBoxContainer className={classes.container} flexWrap='nowrap' alignItems='center' justifyItems='center'>
                <FlexBoxItem>
                    <FlexBoxContainer alignItems='center' justifyContent="space-evenly">
                        <FlexBoxItem flexBasis='content'>
                            <img src={pic2} className={classes.logo}></img>
                        </FlexBoxItem>
                        <FlexBoxItem flexBasis={null}>
                            <Typography variant="h6" className={classes.title}>
                                صفحه اصلی
                            </Typography>
                        </FlexBoxItem>
                        <FlexBoxItem flexBasis={null}>
                            <Typography variant="h6" className={classes.title}>
                                دوره های آموزشی
                            </Typography>
                        </FlexBoxItem>
                        <FlexBoxItem flexBasis={null}>
                            <Typography variant="h6" className={classes.title}>
                                فیلم های آموزشی
                            </Typography>
                        </FlexBoxItem>
                        <FlexBoxItem flexBasis={null}>
                            <Typography variant="h6" className={classes.title}>
                                ارتباط با ما
                            </Typography>
                        </FlexBoxItem>
                        <FlexBoxItem flexBasis={null}>
                            <Typography variant="h6" className={classes.title}>
                                درباره ما
                            </Typography>
                        </FlexBoxItem>
                    </FlexBoxContainer>
                </FlexBoxItem>
                <FlexBoxItem flexBasis='33%'>
                    <FlexBoxContainer justifyContent='space-evenly'>
                        <FlexBoxItem flexBasis={null}>
                            <Button variant="outlined" className={classes.button}
                                    style={{border: '1px solid #FF364A', color: '#FF364A'}}>
                                ورود
                            </Button>
                        </FlexBoxItem>
                        <FlexBoxItem flexBasis={null}>
                            <Button variant='contained' className={classes.button}
                                    style={{backgroundColor: '#FF364A', color: 'white'}}>
                                ثبت نام
                            </Button>
                        </FlexBoxItem>
                    </FlexBoxContainer>
                </FlexBoxItem>
            </FlexBoxContainer>
        </Container>
    );
}
