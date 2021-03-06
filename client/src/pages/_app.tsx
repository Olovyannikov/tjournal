import Head from 'next/head';
import { MuiThemeProvider } from '@material-ui/core';

import { theme } from '../../theme';

import 'macro-css';
import '@/styles';
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <>
            <Head>
                <title>RJournal</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <MuiThemeProvider theme={theme}>
                <Component {...pageProps} />
            </MuiThemeProvider>
        </>
    );
}

export default MyApp;
