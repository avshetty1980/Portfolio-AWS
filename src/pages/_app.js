import Theme from '../styles/theme';
import Head from "next/head"

const prefix = '/Portfolio-AWS';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={prefix+"/favicon.ico"} />
        <title>Ash Shetty</title>
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 