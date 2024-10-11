import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "@/(Components)/Home";
import NavHorizontal from "@/(Components)/Navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavHorizontal />
      <HomePage />
    </main>
  );
}
