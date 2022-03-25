import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps /*, AppContext */ } from 'next/app';
import Router, { useRouter } from 'next/router';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React, { ReactElement } from 'react';
import { Toaster } from 'react-hot-toast';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-step-progress-bar/styles.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'video-react/dist/video-react.css';
import shopifyConfig from '../config/shopify';
import { CommerceProvider } from '../lib/shopify/storefront-data-hooks/src/CommerceProvider';
import { ManagedUIContext } from '../src/components/ui/context';
import * as ga from '../src/utils/analytics';
import '../styles/index.css';
import '../styles/styles.scss';

function FacebookPixel() {
  const router = useRouter();
  React.useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(process.env.NEXT_PUBLIC_FB_PIXEL);
        ReactPixel.pageView();

        Router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  });

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return null;
}

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <CommerceProvider {...shopifyConfig}>
      <FacebookPixel />
      <ManagedUIContext>
        <ChakraProvider>
          <Toaster position="bottom-right" reverseOrder={false} />
          <Component {...pageProps} className="antialiased" />
        </ChakraProvider>
      </ManagedUIContext>
    </CommerceProvider>
  );
};

export default MyApp;
