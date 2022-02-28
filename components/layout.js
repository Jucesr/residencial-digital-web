import React from 'react'
import Head from 'next/head';
import Header from "./Header";
import Footer from "./Footer";
import Page from "./Page";
import Banner from './Banner';

const Layout = ({ children, headerInverted = false, pageColor = "white" }) => {
   return <React.Fragment >

      
      <Head>
         <title>Paciente Sano</title>
         <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
         <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
         <link rel="manifest" href="/manifest.json" />
         <link href="https://fonts.googleapis.com/css?family=Lobster&display=swap" rel="stylesheet"/>
      </Head>
      <Header inverted={headerInverted} />
      <Page color={pageColor}>
         {children}
      </Page>
      <Banner/>
      <Footer />
   </React.Fragment >
}


export default Layout