import CopyKitt from "@/components/copykitt";
import { Inter } from "@next/font/google";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CopyKitt | AI Generated Marketing</title>
        <meta
          name="description"
          content="Generate branding snippets for your project."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CopyKitt />
    </div>
  );
}
