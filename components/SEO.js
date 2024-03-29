import Head from "next/head";
import Script from "next/script";

export default function SEO() {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="lazyOnload" id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <Head>
        <title>SHPCC | Sacred Heart Parish Credit Cooperative</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="SHPCC is a credit cooperative based in Quezon City. It aims to provide an avenue for growth for its members through cooperativism, proper management of financial resources and cooperative values. Together we fulfill our dreams. Start your journey with us today!"
        />
        <meta
          property="og:image"
          content="https://shpcc.vercel.app/images/hero.JPG"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shpcc.vercel.app/" />
        <meta
          property="og:title"
          content="SHPCC | Sacred Heart Parish Credit Cooperative"
        />
        <meta
          property="og:description"
          content="SHPCC is a credit cooperative based in Quezon City. It aims to provide an avenue for growth for its members through cooperativism, proper management of financial resources and cooperative values. Together we fulfill our dreams. Start your journey with us today!"
        />
        <meta
          property="og:image"
          content="https://shpcc.vercel.app/images/hero.JPG"
        ></meta>

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="SHPCC | Sacred Heart Parish Credit Cooperative"
        />
        <meta
          property="twitter:description"
          content="SHPCC is a credit cooperative based in Quezon City. It aims to provide an avenue for growth for its members through cooperativism, proper management of financial resources and cooperative values. Together we fulfill our dreams. Start your journey with us today!"
        />
        <meta
          property="twitter:image"
          content={"https://shpcc.vercel.app/images/hero.JPG"}
        ></meta>
      </Head>
    </>
  );
}
