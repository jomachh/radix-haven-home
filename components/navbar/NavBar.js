import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/NavBar.module.sass";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          src="/assets/logoRadix.png"
          alt="Logo Radix"
          width={173}
          height={34}
        />
      </div>
      <ul className={styles.ul}>
        <li>
          <Link href="/">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Solutions</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Integrations</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Pricing</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Resources</a>
          </Link>
        </li>
      </ul>
      <div className={styles.buttonsContainer}>
        <Link href="/">
          <a className={styles.button}>Login</a>
        </Link>
        <Link href="/">
          <a className={styles.button}>Start Free Trial</a>
        </Link>
      </div>
    </div>
  );
};
