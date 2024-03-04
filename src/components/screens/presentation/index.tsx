import React from 'react';
import Image from "next/image";

import { Video } from '../../video';

import { Container } from './styles';

const Presentation: React.FC = () => {
  return (
    <Container>
      <a href="https://paidaamazon.com.br/" target="_blank" rel="noopener noreferrer">
        <Image
          src="https://paidaamazon.com.br/wp-content/uploads/2023/11/PAI-DA-AMAZON-LOGO-BRANCO-2-1024x500.png"
          alt="Vercel Logo"
          width={1024 / 5.2}
          height={500 / 5.2}
          priority
        />
      </a>
      <h2>A oportunidade de uma vida:</h2>
      <p>torne-se um vendedor na Amazon.</p>

      <br />
      <br />

      <Video />

      <span>
        <button className="button">Garanta sua vaga</button>
      </span>
    </Container>
  );
}

export {
  Presentation
};
