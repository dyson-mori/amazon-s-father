"use client"

import { Presentation, Security } from '../components';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Presentation />
      <Security />

      <footer>
        <p>Copyright © 2024. Todos os direitos reservados.</p>
      </footer>
    </Container>
  );
}
