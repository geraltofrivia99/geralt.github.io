import styled, { keyframes } from 'styled-components';

const Animate = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

export const Block = styled.div`
  position: relative;
  &::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  height: 100%;
  /* width: 100%; */
  animation: ${Animate} 5s linear;
  animation-delay: ${(props: { delay: number }) => `${props.delay}s`}
  /* animation-delay: 3s */
}
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100vh;
`;