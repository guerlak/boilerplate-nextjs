import { AppProps } from 'next/app'
import GlobalStyles from 'styles/global'
import Head from 'next/head'
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React | Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Project starter to work with TS,
          React,
          NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
