import React from "react";
import App from "next/app";
import "../css/tailwind.css";
import "../css/main.scss";
import { PageTransition } from "next-page-transitions";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Layout from "../components/Layout";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Header />

        <PageTransition timeout={300} classNames='page-transition'>
          <Component {...pageProps} />
        </PageTransition>

        <Footer />
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: 300ms all;
          }
        `}</style>
      </Layout>
    );
  }
}

export default MyApp;
