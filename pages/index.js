import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  MdArrowForward as ArrowForward,
  MdArrowBack as ArrowBack,
} from "react-icons/md";
import { motion } from "framer-motion";
import styles from "../styles/pages/Home.module.sass";
import { Fab, Container } from "../components";

export default function Home() {
  const benefits = useRef([
    "improve KPI",
    "reduce churn",
    "grow revenue",
    "track orders",
  ]);
  const [benefit, setBenifit] = useState(benefits.current[0]);

  useEffect(() => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvIjoiYWx0UTIxQUttQ042dUNFTGN6UEF6b3FKNG5sOEZrN2RXbHkza1gwS1VvcVp3eDdjYkVoYmRoTXNqVU5PK3lCTEpvNnhXblc5RzBVRkMraWQwQ1JWZ2huQ3VvVCtpdzIyYzNKbkU5N0RIeCs3MjRQQzEyWkdVSzM2MXZKK0dsSDZLTFlUOVpEblY4cXpCU0U4aHhVM0E3cGxHZGlMdHQwRU5yM2VESmx0VDc0NjlzNHhTaGZYUDZWZytVbjZMSituUUN4M3NGdkZZeFlJMWN6WmYvOU1OVHNYS0l6VzhMV0hOdnR0cWkrM0ZBaTR6Wkd5SkFYM2VVY3QydkNvUDJTWEt1bkt3TUJ6YW1BdGJoc2o3M3RuYzNIemZyS3VuWENSKzZGd0RqM1dLNU9Hb2lOZytqR25JdWtqME9rcnRmM0NsR01ORUlHTTNEUHUxM1Y0UGpuYWZ4L3hpZms2cDhOd1RCdTdPdHdrTDYxQXVlUUJ2NHk5eHptY1JNaERzMXBid1VCcGtFYkV3ZnlqbDQvdkk5ME5lcjQ0M1VnYU5sQm5OUVlXVzg2TnFUUTZPd1ZkdjAvSHF6amJEN3FCMEhVVGFwb044TWFGWmgxM2Y3NzNPWmhHTHAvK0EyUzZ5NDFGQTJMSVl0M3l4QT09IiwiaWF0IjoxNjIwNzg4NzQ4LCJleHAiOjE2MjEzMDcxNDh9.lmgAT98fHyx7WluVLTYBI9mcQ-l7tXXxWQyu-kESTrA"
    );
  }, []);

  return (
    <Container title="Radix Haven">
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
    </Container>
  );
}
