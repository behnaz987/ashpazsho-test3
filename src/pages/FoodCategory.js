import React from "react";
import {Container, makeStyles, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import searchIcon from '../assets/magnifying-glass.png';
import {useBorderRadius, useFont, usePadding, useSize, useWidth} from "../tools/webResponsive";
import FoodCard from "../components/Card";
import clsx from "clsx";
import Footer from '../components/Footer/Footer'
import Header from "../components/Header/Header";
import pizza from '../assets/pizza.png';
import cake from '../assets/cake.png'
import {strings} from '../tools/strings';
import HiddenScroll from "../components/hiddenScroll";

const useStyles = makeStyles(theme => ({

    backgroundMainColor: {
        background: '#FF364A'
    },
    fontMainColor: {
        color: '#FF364A'
    },
    divider: {
        height: 1,
    },
    recipeChip: {
        borderColor: '#03B40F',
    },
    recommendedCoursesChip: {
        backgroundColor: '#FFDD00'
    }
}));

const textFieldStyle = makeStyles(theme => ({
    root: {
        '& .MuiOutlinedInput-root': {
            boxShadow: "0 3px 20px rgba(231, 48, 28, 0.19)",
            [theme.breakpoints.up('md')]: {
                width: useWidth(526, 'md'),
                height: useWidth(72, 'md'),
                borderRadius: useWidth(20, 'md'),
            },
            [theme.breakpoints.up('lg')]: {
                width: useWidth(526, 'lg'),
                height: useWidth(72, 'lg'),
                borderRadius: useWidth(20, 'lg')
            },
            [theme.breakpoints.up('xl')]: {
                width: 526,
                height: 72,
                borderRadius: 20
            },
        },
        '& .MuiInputBase-root': {
            color: 'rgba(231, 48, 28, 0.66)',
            fontWeight: 200,
            [theme.breakpoints.up('md')]: {
                fontSize: useWidth(20, 'md'),
            },
            [theme.breakpoints.up('lg')]: {
                fontSize: useWidth(20, 'lg'),
            },
            [theme.breakpoints.up('xl')]: {
                fontSize: 20
            },
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent'
        }
    },
}));

export default function App(props) {
    const card = strings.card;
    const classes = useStyles();
    const textFieldClasses = textFieldStyle();

    return (
        <div>
            <Header/>
            <Container>
                <Grid container direction='column'> {/* Whole page wrapper */}
                    <Grid item container direction='row' justify='space-between' alignItems='center'>
                        <Grid item>
                            <Typography className={useFont(28, 'medium')}>
                                دسته بندی غذایی/حلوا
                        </Typography>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item>
                            <TextField
                                classes={textFieldClasses}
                                variant='outlined'
                                placeholder='دوره مورد نظر خود را جستجو کنید'
                                InputProps={{
                                    endAdornment: (
                                        <Button
                                            className={clsx([useSize(66, 60), useBorderRadius(17), classes.backgroundMainColor])}
                                        >
                                            <img src={searchIcon} alt='search-icon' className={useSize(28, 28)}/>
                                        </Button>
                                    )
                                }}
                            />
                        </Grid>
                    </Hidden>
                </Grid>
                    <HiddenScroll horizontal>
                        <Grid item container justify='space-between' wrap='nowrap' className={usePadding(69, 533)}>
                            <Grid item lg={3} md={4}>
                                <FoodCard img={pizza}
                                          title={card.vpizza}
                                          type={card.fastFood}
                                          duration={card.clock}/>
                            </Grid>
                            <Grid item lg={3} md={4}>
                                <FoodCard
                                    img={cake}
                                    title={card.cake}
                                    type={card.sweets}
                                    duration={card.clock}/>
                            </Grid>
                            <Grid item lg={3} md={4}>
                                <FoodCard img={pizza}
                                          title={card.vpizza}
                                          type={card.fastFood}
                                          duration={card.clock}/>
                            </Grid>
                            <Grid item lg={3} md={4}>
                                <FoodCard img={cake}
                                          title={card.cake}
                                          type={card.sweets}
                                          duration={card.clock}/>
                            </Grid>
                        </Grid>
                    </HiddenScroll>
            </Grid>
        </Container>
            <Footer/>
        </div>
    );
}
