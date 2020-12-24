import Head from 'next/head'

import GlobalStyle from '../styles/GlobalStyle'

import { MenuProvider } from '../hooks/Menu'

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>CashStack</title>
                <link rel='icon' href='/logo-icon-dark.svg' />

                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link href='https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap' rel='stylesheet'></link>
                <link href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap' rel='stylesheet'></link>
            </Head>

            <GlobalStyle />
            <MenuProvider>
                <Component {...pageProps} />
            </MenuProvider>
        </>
    )
}
