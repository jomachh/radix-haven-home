import { motion } from "framer-motion";
import { Container, Fab } from "../components";
import { MdHome as Home, MdArrowBack as ArrowBack } from "react-icons/md";
import styles from "../styles/pages/Contact.module.sass";

export default function Contact() {
  return (
    <Container title="Radix Haven - Contact">
      <main className={styles.main}>
        <Fab
          layoutId="arrow_forward"
          href="/"
          position="right"
          icon={<Home size={25} color="white" />}
          initial={{ right: "300px" }}
        />
        <Fab
          layoutId="arrow_back"
          href="/faqs"
          icon={<ArrowBack size={25} color="white" />}
          position="left"
          initial={{ left: "300px" }}
        />
        <motion.div
          className={styles.form}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get in Touch
          </motion.h1>
          <motion.form
            className={styles.form}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <input className={styles.input} placeholder="First Name" />
            <input className={styles.input} placeholder="Last Name" />
            <br />
            <input className={styles.input} placeholder="Email" />
            <select className={styles.select}>
              <option>🇺🇸 United States</option>
              <option>🇬🇧 United Kingdom</option>
            </select>
            <br />
            <select className={`${styles.select} ${styles.countryPrefix}`}>
              <option>🇺🇸 +1</option>
              <option>🇬🇧 +44</option>
            </select>
            <input
              className={`${styles.input} ${styles.phone}`}
              placeholder="Phone number"
            />
            <select className={styles.select}>
              <option>- - -</option>
              <option>Custom Plan</option>
              <option>General Question</option>
            </select>
            <br />
            <textarea className={styles.textarea} placeholder="Note" />
            <br />
            <button className={styles.btn}>Send</button>
          </motion.form>
        </motion.div>
      </main>
    </Container>
  );
}
