import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RTL from './tools/RTL'
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import App from "./pages/FoodCategory";

function Index() {
    const theme = createMuiTheme({
        direction: "rtl",
        typography: {
            fontFamily: "IRANSans",
            fontWeight: 'normal'
        },
        breakpoints: {
            values: {
                xs: 360,
                sm: 600,
                md: 960,
                lg: 1280,
                xl: 1920
            }
        },
        overrides: {
            MuiButton: {
                root: {
                    minWidth: "unset"
                }
            },
            MuiRating: {
                root: {
                    textAlign: undefined
                }
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <RTL>
                    <App/>
                </RTL>
            </CssBaseline>
        </ThemeProvider>
    );
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
