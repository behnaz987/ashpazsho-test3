import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import FlexBoxContainer from "../tools/FlexBoxContainer";
import FlexBoxItem from "../tools/FlexBoxItem";
import pic1 from '../assets/logo.png'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // drawerHeader: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     padding: theme.spacing(0, 1),
    //     // necessary for content to be below app bar
    //     ...theme.mixins.toolbar,
    //     justifyContent: 'flex-end',
    //     flexWrap:'nowrap'
    // },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    logo: {
        height: '70px',
        width: '230px'
    }
}));

export default function PersistentDrawerLeft() {
    const classes = useStyles();
    const theme = useTheme();
    const [draweropen, setDrawerOpen] = React.useState(false);
    const [courseopen, setCourseOpen] = React.useState(false);
    const [filmopen, setFilmOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
    const handleCourseOpen = () => {
        setCourseOpen(!courseopen);
    };

    const handleFilmOpen = () => {
        setFilmOpen(!filmopen);
    };

    return (

        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: draweropen,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, draweropen && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={draweropen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <FlexBoxContainer className={classes.drawerHeader} flexWrap='nowrap' flexDirection='column'
                                  alignItems='center'>
                    <FlexBoxItem>
                        <img src={pic1} className={classes.logo}/>
                    </FlexBoxItem>
                    <FlexBoxItem>
                        <Typography>آشپزشو، قناد شو</Typography>
                    </FlexBoxItem>
                </FlexBoxContainer>
                <br/>
                <Divider variant='middle'/>
                <List>
                    {['ورود/ثبت نام', 'صفحه اصلی'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                    <ListItem button onClick={handleCourseOpen}>
                        <ListItemIcon>
                            <KeyboardArrowDownIcon/>
                            <ListItemText>
                                دوره های آموزشی
                            </ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    {courseopen ?
                        <List style={{backgroundColor: 'gray'}}>
                            <ListItem>
                                <ListItemText>حضوری</ListItemText>
                            </ListItem>
                            <ListItem><ListItemText>آنلاین</ListItemText></ListItem>
                        </List>
                        : null}
                    <ListItem button onClick={handleFilmOpen}>
                        <ListItemIcon>
                            <KeyboardArrowDownIcon/>
                            <ListItemText>
                                فیلم های آموزشی
                            </ListItemText>
                        </ListItemIcon>
                    </ListItem>
                    {filmopen ?
                        <List style={{backgroundColor: 'gray'}}>
                            <ListItem>
                                <ListItemText>پکیج ها</ListItemText>
                            </ListItem>
                            <ListItem><ListItemText>دسته بندی غذایی</ListItemText></ListItem>
                        </List>
                        : null}
                    {['پبشنهادها و تخفیف ها', 'درباره ما', 'تماس با ما',].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                    <ListItem>
                        <ListItemText style={{color: 'red'}}>
                            خروج
                        </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: draweropen,
                })}
            >
                <div className={classes.drawerHeader}/>

            </main>
        </div>
    );
}
