import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import styles from "./Layout.module.css";
import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode; // klo kita membuat children, berarti tipe dari props tsb adalah ReactNode
  pageTitle: string; // definisikan pageTitle itu adalah string
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>
          NextJS Basic | {""} {pageTitle}
        </title>
        <meta name="description" content="Website NextJS Basic" />
      </Head>
      <div className={styles.container}>
        <Header></Header>
        <div className={styles.content}>{children}</div>
        <Footer></Footer>
      </div>
    </>
  );
}
