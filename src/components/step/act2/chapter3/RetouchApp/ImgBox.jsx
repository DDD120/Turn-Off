import React from "react";
import styled from "styled-components";
import { DefaultImage } from "components/common/GlobalStyle";

const Base = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 10px;
`;

const Img = styled(DefaultImage)`
  filter: ${({ filters }) =>
    `brightness(${filters.brightness}%) contrast(${filters.contrast}%) saturate(${filters.saturate}%) grayscale( ${filters.grayscale}%) invert(${filters.invert}%) hue-rotate(${filters.huerotate}deg) blur(${filters.blur}px) sepia(${filters.sepia}%)`};
`;

const ImgBox = ({ filters, FILE_STATE, currentFile }) => {
  return (
    <Base>
      <Img
        width={500}
        height={403}
        filters={filters}
        src={FILE_STATE[currentFile].img_url}
        alt={FILE_STATE[0].title}
      />
    </Base>
  );
};

export default ImgBox;
