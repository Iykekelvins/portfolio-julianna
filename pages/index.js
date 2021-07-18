import Head from "next/head";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/Services";
import Works from "../components/Works";
import Tools from "../components/Tools";
import Publications from "../components/Publications";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Head>
        <title>Julianna - Product Designer</title>
        <meta
          name="description"
          content="product designer user experience marketing business"
        />
      </Head>
      {modal && <Modal modal={modal} setModal={setModal} />}
      <Navbar modal={modal} setModal={setModal} />
      <About />
      <Services />
      <Works />
      <Tools />
      <Publications />
      <Footer />
    </>
  );
}
