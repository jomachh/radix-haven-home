import { Container, Fab, Faq } from "../components";
import {
  MdArrowForward as ArrowForward,
  MdArrowBack as ArrowBack,
} from "react-icons/md";
import styles from "../styles/modules/Faqs.module.sass";

export default function Faqs() {
  return (
    <Container title="Radix Haven - FAQs">
      <main className={styles.main}>
        <Fab
          layoutId="arrow_forward"
          href="/"
          position="right"
          icon={<ArrowForward size={25} color="white" />}
          initial={{ right: "300px" }}
        />
        <Fab
          layoutId="arrow_back"
          href="/products"
          icon={<ArrowBack size={25} color="white" />}
          position="left"
          initial={{ left: "300px" }}
        />
        <h1>Frequently Asked Questions</h1>
        <label>
          Here you can find the most frequently asked questions , but if you
          require more assistance you can call us at (628) 245-5777 or send us
          an email to info@radixhaven.com.
        </label>
        <Faq
          transition={{ delay: 0.3 }}
          question="What is Radix Haven?"
          answer="We are a Data Science Platform for Payment Gateways. We help online businesses to grow revenue, reduce churn and improve overall KPI."
        />
        <Faq
          transition={{ delay: 0.4 }}
          question="How does it work?"
          answer="Start Free Trial for 14 days. Integrate your Payment Gateway in less than 10 min. For more information go to Pricing."
        />
        <Faq
          transition={{ delay: 0.5 }}
          question="How does our Pricing work?"
          answer="You can upgrade your plan at any moment given during the Free Trial. We have 3 different types of plan depending on your number of monthly transactions. Your plan include data analytics to support your business decisions. For more information go to Pricing."
        />
        <Faq
          transition={{ delay: 0.6 }}
          question="How does our Product work?"
          answer="We have 3 differents Add-ons that can only be added on Medium and Premium plans. If you want to learn more about our products, you can click on Machine Learning, Business Intelligence and Financial Tools."
        />
      </main>
    </Container>
  );
}
