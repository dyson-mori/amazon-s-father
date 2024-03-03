import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <a
          href="https://paidaamazon.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://paidaamazon.com.br/wp-content/uploads/2023/11/PAI-DA-AMAZON-LOGO-BRANCO-2-1024x500.png"
            alt="Vercel Logo"
            // className={styles.vercelLogo}
            width={1024 / 5.2}
            height={500 / 5.2}
            priority
          />
        </a>
        <h2>A oportunidade de uma vida:</h2>
        <p>torne-se um vendedor na Amazon.</p>
      </div>

      <div className={styles.center}>
        <video height={240 * 2} controls preload="none">
          <source src="https://res.cloudinary.com/dfayz3rrm/video/upload/v1709434080/VENHA_FAZER_PARTE_DA_COMUNIDADE_LOJA_PRONTA_itlof9.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>
      </div> */}
      <footer className={styles.footer}>
        <p>Copyright © 2024. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
