import React from 'react';

import { Icons } from '../../icons';

import './styles.css';

const Security: React.FC = () => {
  return (
    <section className="security-container">
      <h2>O que podemos</h2>
      <p>assegurar para você?</p>

      <div className="cards">
        <div className="card">
          <Icons name="zero-risk" />
          <h3>RISCO ZERO</h3>
          <p>
            <strong>Teste gratuitamente durante uma semana.</strong><br />
            Caso perceba que o conteúdo não atende suas expectativas ou se arrependa da aquisição, você pode facilmente pedir o reembolso através da plataforma de pagamento.
          </p>
        </div>

        <div className="card">
          <Icons name="sell-more" />
          <h3>VENDA 5X MAIS</h3>
          <p>
            Participar do programa Fulfillment by Amazon (FBA) pode trazer diversas vantagens para os comerciantes, incluindo a possibilidade de um aumento de até <strong>cinco vezes nas vendas</strong>. <br /> (Fonte: Amazon BR)
          </p>
        </div>

        <div className="card">
          <Icons name="copy" />
          <h3>CÓPIA LEGAL</h3>
          <p>
            Não se trata somente de assimilar a <strong>metodologia</strong>; <br /> eu também vou possibilitar que vocês copiem <strong>legalmente</strong> o meu <strong>método de operação</strong>.
          </p>
        </div>

        <div className="card">
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
  );
}

export {
  Security
};
