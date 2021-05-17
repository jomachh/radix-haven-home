import styles from "../styles/pages/Solutions.module.sass";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container, Fab } from "../components";
import {
  MdArrowForward as ArrowForward,
  MdArrowBack as ArrowBack,
} from "react-icons/md";

export default function Solutions() {
  return (
    <Container title="Radix Haven - Solutions">
      <main className={styles.main}>
        <Fab
          layoutId="arrow_forward"
          href="/products"
          position="right"
          icon={<ArrowForward size={25} color="white" />}
          initial={{ right: "300px" }}
        />
        <Fab
          layoutId="arrow_back"
          href="/about-us"
          icon={<ArrowBack size={25} color="white" />}
          position="left"
          initial={{ left: "300px" }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1>
            We genuinely believe in
            <br />
            and embrace
            <br />
            automation, but we also
            <br />
            believe in the human
            <br />
            touch.
          </h1>
          <p>
            Growing a successful online business is a difficult journey with ups
            and
            <br />
            downs, which requires constant business adjustments. And all of
            these
            <br />
            adjustments have to be made on accurate insights.
          </p>
          <p>
            Accurate insights and proper reporting are time-consuming and
            <br />
            expensive because they depend on a skilled workforce. And even
            <br />
            though our platform does the job of 5 different positions in
            real-time,
            <br />
            we provide you with a free consultation so you can truly understand
            <br />
            your business data.
          </p>
          <p>
            Now, you will have the opportunity to spend your time focused on
            your
            <br />
            customers, products, and business strategies to take your business
            to
            <br />
            the next level.
          </p>
        </motion.div>
        <div className={styles.images}>
          <motion.div
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Image
              className={styles.img}
              src="/assets/img-4.jpeg"
              alt="img-4"
              width={535}
              height={337}
            />
          </motion.div>
          <motion.div
            className={styles.imgAnim}
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Image
              className={styles.img}
              src="/assets/img-5.jpeg"
              alt="img-5"
              width={535}
              height={337}
            />
          </motion.div>
        </div>
      </main>
    </Container>
  );
}
