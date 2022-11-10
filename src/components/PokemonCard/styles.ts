import styled from "styled-components";

export const MoreDetailsButton = styled.button<{ color: string }>`
  width: calc(100% + 2px);
  height: 3rem;
  background: ${(props: { color: any }) => props.color};
  border-radius: 0 0 1.5rem 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  line-height: 150%;
  font-weight: 700;
  color: #ffffff;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const CardOverlay = styled.div<{ color: string }>`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);

  &::after {
    content: "";
    display: block;
    width: 12.5rem;
    height: 12.5rem;
    background: ${(props) => props.color};
    filter: blur(128px);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: 0.8s;
  }
`;
