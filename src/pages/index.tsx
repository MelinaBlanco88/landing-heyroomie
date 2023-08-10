import Head from 'next/head';
import { Header, Body, Footer } from '../components'
import "bootstrap/dist/css/bootstrap.min.css";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Hey! Roomie</title>
        <meta name="description" content="Hey! Roomie is a cutting-edge platform that aims to transform the way people find roommates and shared living spaces." />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3144810430632001" crossOrigin="anonymous"></script>
      </Head>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}
