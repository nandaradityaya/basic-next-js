import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/analog.jpeg" width={200} height={200} alt="profile"></Image>
      <h1 className="title">Welcome To My Website</h1>
      <h2 className={styles["title-homepage"]}>Style Module</h2>
    </Layout>
  );
};

export default Home;
