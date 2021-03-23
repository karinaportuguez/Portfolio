import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import NProgress from 'nprogress';
import nProgress from 'nprogress';
import classNames from 'classnames';
import Navbar from './Navbar';

const Layout = ({
  children, footer = true, title, dark = false,
}) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on('routeChangeStart', handleRouteChange);

    router.events.on('routeChangeComplete', () => NProgress.done());

    router.events.on('routeChangeError', () => nProgress.done());

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <div className={dark ? 'bg-dark' : 'bg-light'}>
      <Navbar />
      <main className="container py-4">

        {title && (
          <h1 className={dark ? 'text-light text-center' : 'text-center'}>
            {title}
          </h1>
        )}

        {children}
      </main>

      {
        footer && (
          <footer className="bg-dark text-light text-center">
            <div className="container p-4">
              <h1>&copy; Karina Portuguez | Portfolio</h1>
              <p>
                2000 -
                {new Date().getFullYear()}
              </p>
              <p>All rights Reserved. </p>
            </div>
          </footer>
        )
      }
    </div>
  );
};

export default Layout;
