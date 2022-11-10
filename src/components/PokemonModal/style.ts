import styled from "styled-components";

export const CardOverlay = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;

  &::after {
    content: "";
    display: block;
    width: 12.5rem;
    height: 12.5rem;
    background: ${(props) => props.color};
    filter: blur(128px);
    position: absolute;
    top: 0;
    left: 4.25rem;
  }

  @media (max-width: 62.5rem) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
