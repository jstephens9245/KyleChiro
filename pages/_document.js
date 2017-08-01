import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import stylesheet from '@styles/index.scss';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          {/* <link rel="icon" href="../static/KVChiroLogo.jpg" /> */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
