import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Container, Fab, Tabs, TabItem, Section } from "../components";
import Image from "next/image";
import {
  MdArrowForward as ArrowForward,
  MdArrowBack as ArrowBack,
  MdMemory as Memory,
  MdAndroid as Android,
  MdInsertChart as Chart,
  MdLightbulbOutline as Bulb,
} from "react-icons/md";
import styles from "../styles/modules/Products.module.sass";

export default function Products() {
  const [selected, setSelected] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
  });

  return (
    <Container title="Radix Haven - Products">
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
          href="/solutions"
          icon={<ArrowBack size={25} color="white" />}
          position="left"
          initial={{ left: "300px" }}
        />
        <div>
          <h1>Explore our Products</h1>
          <Tabs>
            <TabItem
              selected={selected.one}
              icon={<Memory size={35} color="white" />}
              label="Data Analytics"
              onClick={() =>
                setSelected({
                  one: true,
                  two: false,
                  three: false,
                  four: false,
                })
              }
            />
            <TabItem
              selected={selected.two}
              icon={<Android size={35} color="white" />}
              label="Machine Learning"
              onClick={() =>
                setSelected({
                  one: false,
                  two: true,
                  three: false,
                  four: false,
                })
              }
            />
            <TabItem
              selected={selected.three}
              icon={<Chart size={35} color="white" />}
              label="Bussines Intelligence"
              onClick={() =>
                setSelected({
                  one: false,
                  two: false,
                  three: true,
                  four: false,
                })
              }
            />
            <TabItem
              selected={selected.four}
              icon={<Bulb size={35} color="white" />}
              label="Financial Tools"
              onClick={() =>
                setSelected({
                  one: false,
                  two: false,
                  three: false,
                  four: true,
                })
              }
            />
          </Tabs>
        </div>
        {selected.one && (
          <Section
            name="Data Analytics"
            subtitle="Keep on track on your day-to-day KPI to draw effective business conclusions"
            description="Extracting, cleaning, and analyzing raw data is not only time consuming but it is also expensive, meaning that it requires a full-time Data Analyst to do this job properly. Radix Haven processes your orders/transactions in real-time and provides you a well-structured central hub to keep you updated about your business operation."
            imagePath="/assets/img-6.png"
            benefits={[
              "12+ KPI to control your business health",
              "5 dedicated analytics modules",
              "Freedom to filter your insights by any date range",
              "Export CSV",
            ]}
          />
        )}
        {selected.two && (
          <Section
            name="Machine Learning"
            subtitle="We help you to be proactive by predicting future outcomes before they happen"
            description="ML is a subset of artificial intelligence that uses algorithms built on mathematical models to make predictions or decisions without being explicitly programmed. We have proprietary and tested algorithms to predict future revenue with great accuracy and identify risky customers to reduce churn."
            imagePath="/assets/img-7.png"
            benefits={[
              "3+ ML models",
              "Risky customers alerts",
              "Winback insights",
            ]}
          />
        )}
        {selected.three && (
          <Section
            name="Bussines Intelligence"
            subtitle="Thinking outside the box won’t be a problem anymore"
            description="BI combines business analytics, data mining, data visualization, data tools, and infrastructure to help organizations make data-driven decisions. As we all know, innovation is critical to surviving in today's business world. We will help you be on top of your game by providing relevant insights to develop a winning strategy."
            imagePath="/assets/img-8.png"
            benefits={[
              "Seasonality Analysis",
              "RFM Analysis",
              "Churn Rate",
              "Segmentation",
            ]}
          />
        )}
        {selected.four && (
          <Section
            name="Financial Tools"
            subtitle="Budgeting and planning have never been so easier"
            description="Planning and budgeting are essential business processes to make sure you're using your resources wisely. Either you want to make sure you have enough stock for a particular demanded item, or if you're going to hire more people to guarantee a quality internal operation. You can then trust our Financial Tools to support you in taking these decisions in real-time with accurate insights."
            imagePath="/assets/img-9.png"
            benefits={[
              "Income Reports",
              "Products/Services (Breakdown)",
              "Customers (Breakdown)",
              "Alert Messages",
            ]}
          />
        )}
      </main>
    </Container>
  );
}
