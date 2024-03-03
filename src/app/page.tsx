import Image from "next/image";
import styles from "./page.module.css";

import { Icons } from '../components';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.presentation}>
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
      </section>

      <section className={styles.center}>
        <video
          // height={240 * 2}
          controls preload="none">
          <source src="https://res.cloudinary.com/dfayz3rrm/video/upload/v1709434080/VENHA_FAZER_PARTE_DA_COMUNIDADE_LOJA_PRONTA_itlof9.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div>
          <a
            // target="_blank"
          >Garanta sua vaga</a>
        </div>
      </section>

      <section className={styles.security}>
        <h2>O que podemos</h2>
        <p>assegurar para você?</p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <Icons name="zero-risk" />
            <h3>RISCO ZERO</h3>
            <p>
              <strong>Teste gratuitamente durante uma semana.</strong><br />
              Caso perceba que o conteúdo não atende suas expectativas ou se arrependa da aquisição, você pode facilmente pedir o reembolso através da plataforma de pagamento.
            </p>
          </div>

          <div className={styles.card}>
            <Icons name="sell-more" />
            <h3>VENDA 5X MAIS</h3>
            <p>
              Participar do programa Fulfillment by Amazon (FBA) pode trazer diversas vantagens para os comerciantes, incluindo a possibilidade de um aumento de até <strong>cinco vezes nas vendas</strong>. <br /> (Fonte: Amazon BR)
            </p>
          </div>

          <div className={styles.card}>
            <Icons name="copy" />
            <h3>CÓPIA LEGAL</h3>
            <p>
              Não se trata somente de assimilar a <strong>metodologia</strong>; <br /> eu também vou possibilitar que vocês copiem <strong>legalmente</strong> o meu <strong>método de operação</strong>.
            </p>
          </div>

          <div className={styles.card}>
            <Icons name="initial-setup" />
            <h3>SETUP INICIAL*</h3>
            <p>
              Disponibilizamos sua loja pronta para funcionamento e um catálogo de parceiros fornecedores, ajudando você a encontrar produtos já aprovados.
              <br />
              <br />
              <strong>*Nota</strong>: Para vender na Amazon, a <strong>aprovação</strong> da sua loja pela CIA é <strong>necessária</strong>.
            </p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>Copyright © 2024. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}
