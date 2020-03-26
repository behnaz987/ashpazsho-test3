import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Footer from './components/Footer'
import RTL from './tools/RTL'
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";

function Index() {
    const theme = createMuiTheme({
        direction: "rtl",
        typography: {
            fontFamily: "IRANSans",
            fontWeight: 'normal'
        },
        overrides: {
            MuiButton: {
                root: {
                    minWidth: "unset"
                }
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <RTL>
                    <Footer/>
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
