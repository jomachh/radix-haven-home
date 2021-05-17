import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles/pages/AboutUs.module.sass";
import {
  MdArrowForward as ArrowForward,
  MdArrowBack as ArrowBack,
  MdCheckCircle as Check,
} from "react-icons/md";
import { Fab, ListItem, Container } from "../components";

export default function AboutUs() {
  return (
    <Container title="Radix Haven - About Us">
      <main className={styles.main}>
        <Fab
          layoutId="arrow_forward"
          href="/solutions"
          position="right"
          icon={<ArrowForward size={25} color="white" />}
          initial={{ right: "300px" }}
        />
        <Fab
          layoutId="arrow_back"
          href="/"
          icon={<ArrowBack size={25} color="white" />}
          position="left"
          initial={{ left: "-100px" }}
          animate={{ left: "300px" }}
        />
        <motion.div
          className={styles.hero}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/assets/astronaut.png"
            alt="astronaut"
            width={240}
            height={240}
          />
          <div className={styles.titleContainer}>
            <h1>What is Radix Haven?</h1>
            <h3>
              We are your in-house Data Science
              <br />
              Department
            </h3>
          </div>
        </motion.div>
        <div className={styles.heroContent}>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Image
              className={styles.img}
              src="/assets/img-2.png"
              alt="img-2"
              width={535}
              height={337}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className={styles.imgAnim}
          >
            <Image
              className={styles.img}
              src="/assets/img-3.png"
              alt="img-2"
              width={535}
              height={337}
            />
          </motion.div>
          <div className={styles.answerContainer}>
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              We answer all your data questions in real-time and
              <br />
              help you automate all actions required to apply these
              <br />
              insights into practice. And we do this by providing you
              <br />
              a secure cloud-based and easy to use Data Science
              <br />
              Platform where you can easily integrate and combine
              <br />
              multiple data sources, task management tools, and
              <br />
              communication apps to enhance your workflow.
            </motion.p>
            <ListItem
              icon={<Check size={25} color="#54ccf0" />}
              label="Real-time KPI"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            />
            <ListItem
              icon={<Check size={25} color="#54ccf0" />}
              label="KPI Alert Messages"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            />
            <ListItem
              icon={<Check size={25} color="#54ccf0" />}
              label="Revenue and Churn Forecast"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            />
            <ListItem
              icon={<Check size={25} color="#54ccf0" />}
              label="Bussines Highlights"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            />
            <ListItem
              icon={<Check size={25} color="#54ccf0" />}
              label="Financial Reporting"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
            />
          </div>
        </div>
      </main>
    </Container>
  );
}
