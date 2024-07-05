import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>Profile Social Media</title>
        <meta name="description" content="Una página de perfil inspirada en las redes sociales modernas, usando transiciones y componentes simples vanilla." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content="Profile Social Media" />
        <meta property="og:description" content="Una página de perfil inspirada en las redes sociales modernas, usando transiciones y componentes simples vanilla." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000" />
        <meta property="og:image" content="http://localhost:3000/profile.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Profile Social Media" />
        <meta name="twitter:description" content="Una página de perfil inspirada en las redes sociales modernas, usando transiciones y componentes simples vanilla." />
        <meta name="twitter:image" content="http://localhost:3000/profile.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;