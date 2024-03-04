"use client"

import React from 'react';

import { Container } from './styles';

export const Video: React.FC = () => {

  return (
    <Container>
      <video
        // ref={videoRef}
        controls
        preload="metadata"
        poster="https://paidaamazon.com.br/wp-content/uploads/2024/02/el_YSTjOeb4-HD.jpg"
      >
        <source src="https://res.cloudinary.com/dfayz3rrm/video/upload/v1709434080/VENHA_FAZER_PARTE_DA_COMUNIDADE_LOJA_PRONTA_itlof9.mp4" type="video/mp4" />
        {/* <source src="https://res.cloudinary.com/zasetrewsqw/video/upload/v1705883766/evo/e4048132c5cc4d83d5f579be6139c0e3_lntcbc.mp4" type="video/mp4" /> */}
        {/* <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        /> */}
        {/* <track kind="captions" srcLang="en" src="assets/subtitles.vtt" /> */}
        Your browser does not support the video tag.
      </video>
    </Container>
  )
}