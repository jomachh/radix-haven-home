import { useState, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/modules/Home.module.sass";
import { Fab } from "../components";
import { MdArrowForward as ArrowForward } from "react-icons/md";

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
        <Fab icon={<ArrowForward size={25} color="white" />} />
        <div className={styles.triangle} />
        <div className={styles.triangle} />
        <div className={styles.hero}>
          <h1>
            Be proactive, not
            <br />
            reactive. We help your
            <br />
            online business to
            <br />
            <span>{benefit}</span>
          </h1>
          <Image
            className={styles.img_1}
            src="/assets/img-1.png"
            alt="IMG 1"
            width={719}
            height={450}
          />
        </div>
      </main>
    </div>
  );
}
