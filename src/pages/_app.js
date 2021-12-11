import Theme from '../styles/theme';

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <Theme>
          <Component {...pageProps} key={router.route} />
      </Theme>
    </>
  );
}
 