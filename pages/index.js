import { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  MdArrowForward as ArrowForward,
  MdArrowBack as ArrowBack,
} from "react-icons/md";
import { motion } from "framer-motion";
import styles from "../styles/modules/Home.module.sass";
import { Fab } from "../components";

export default function Home() {
  const benefits = useRef([
    "improve KPI",
    "reduce churn",
    "grow revenue",
    "track orders",
  ]);
  const [benefit, setBenifit] = useState(benefits.current[0]);
  // const [position, setPosition] = useState(0);

  // useEffect(() => {
  //   const num = Math.floor(Math.random * benefits.current.length)
  //   setPosition(num);
  //   const bnf = benefits.current[position]

  //   const interval = setInterval(() => {
  //     if (benefit.includes(bnf)) {

  //     } else if {

  //     }
  //   }, interval);
  //   return () => clearInterval(interval);
  // }, [benefit]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Radix Haven</title>
        <meta name="description" content="Redesign of Radix Haven's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Fab
          layoutId="arrow_forward"
          href="/about-us"
          icon={<ArrowForward size={25} color="white" />}
          initial={{ right: "-100px" }}
          animate={{ right: "300px" }}
          transition={{ delay: 0.2 }}
        />
        <Fab
          layoutId="arrow_back"
          href="/"
          icon={<ArrowBack size={25} color="white" />}
          initial={{ left: "-100px" }}
        />
        <div className={styles.triangle} />
        <div className={styles.triangle} />
        <div className={styles.hero}>
          <motion.h1
            transition={{ delay: 0.5 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Be proactive, not
            <br />
            reactive. We help your
            <br />
            online business to
            <br />
            <span>{benefit}</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Image
              className={styles.img_1}
              src="/assets/img-1.png"
              alt="IMG 1"
              width={719}
              height={450}
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
