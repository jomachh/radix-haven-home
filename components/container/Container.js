import Head from "next/head";
import styles from "../../styles/modules/Container.module.sass";
export const Container = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Redesign of Radix Haven's Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};
