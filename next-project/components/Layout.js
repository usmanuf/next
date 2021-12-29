import React from "react";
import { Header } from "../components/Navbar/Navbar";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */
// import { TopSection } from "../components/Navbar/Navbar";
import Footer from '../components/Footer/Footer';
import Head from "next/head";
export const Layout = ({children, header}) => {
    return (
      <React.Fragment>

          <Header />
            <main>
                {children}
            </main>
            <Footer />
      </React.Fragment>
    )
}
