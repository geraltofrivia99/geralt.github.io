import styled, { css } from 'styled-components';

interface Inactive {
  sInactive: boolean;
}

export const LogoImage = styled.img`
  width: 6vmin;
  height: 6vmin;
`;

// export const ElBg = styled.div`
//   position: relative;
//   width: calc(100vw - 140px);
//   height: 100%;
//   transition: transform 0.6s 0.7s;
//   will-change: transform;
//   &::before {
//     content: '';
//     position: absolute;
//     left: 0;
//     top: -5%;
//     width: 100%;
//     height: 110%;
//     background-size: cover;
//     background-position: center center;
//     transition: transform 1s;
//     transform: translate3d(0, 0, 0) scale(1);
//   }
// `;

// const transformCss = css`
//   transform: translate3d(0, 100%, 0);
// `
// const transformCss1 = css`
//   transform: translate3d(0, -100%, 0) scale(1.2);
// `
// const transformCss2 = css`
//   transition: transform 0.8s;
// `

// export const ElInner = styled.div`
//   overflow: hidden;
//   position: relative;
//   height: 100%;
//   transition: transform 1s;
// `;

// export const Cont = styled.div`
//   position: relative;
//   overflow: hidden;
//   height: 100vh;
//   padding: 80px 70px;
//   &${ElBg}::before {
//     ${(props: IInactive) => props.sInactive ? transformCss1 : ''}
//   }
//   &${ElInner} {
//     ${({ sInactive }) => sInactive ? transformCss : ''}
//   }
// `;

// export const ContInner = styled.div`
//   position: relative;
//   height: 100%;
//   &:hover ${ElBg}::after {
//     opacity: 1;
//   }
// `;

// export const El = styled.div`
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 19.2%;
//   height: 100%;
//   background: #252525;
//   transition: transform 0.6s 0.7s, width 0.7s, opacity 0.6s 0.7s, z-index 0s 1.3s;
//   will-change: transform, width, opacity;
//   &${ElBg}::before {
//     ${({ active }) => active ? transformCss2 : ''}
//   }
// `;

// export const ElOverflow = styled.div`
//   overflow: hidden;
//   position: relative;
//   height: 100%;
// `;

// export const ELDescription = styled.div`
//   height: 13%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 1000;
//   transform: translateY(-100%);
//   will-change: transform;
//   transition: transform 0.5s 0.1s;
// `;

// export const ElPreview = styled.div`
//   z-index: 2;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   transition: all 0.3s 1.2s;
// `;

// export const ElHeading = styled.div`
//   color: #fff;
//   text-transform: uppercase;
//   font-size: 18px;
// `;

// export const ElContent = styled.div`
//   z-index: -1;
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   padding: 30px;
//   opacity: 0;
//   pointer-events: none;
//   transition: all 0.1s;
// `;

// export const ElText = styled.div`
//   text-transform: uppercase;
//   font-size: 40px;
//   color: #fff;
// `;

// export const ElCloseBtn = styled.div`
//   z-index: -1;
//   position: absolute;
//   right: 10px;
//   top: 10px;
//   width: 60px;
//   height: 60px;
//   opacity: 0;
//   pointer-events: none;
//   transition: all 0s 0.45s;
//   cursor: pointer;
// `;

// export const ElIndex = styled.div`
//   overflow: hidden;
//   position: absolute;
//   left: 0;
//   bottom: -80px;
//   width: 100%;
//   height: 100%;
//   min-height: 250px;
//   text-align: center;
//   font-size: 20vw;
//   line-height: 0.85;
//   font-weight: bold;
//   transition: transform 0.5s, opacity 0.3s 1.4s;
//   transform: translate3d(0, 1vw, 0);
// `;

// export const ElIndexBack = styled.div`
//   color: #2f3840;
//   opacity: 0;
//   transition: opacity 0.25s 0.25s;
// `;

// export const ElIndexFront = styled.div`
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   width: 100%;
// `;

// export const ElIndexOverlay = styled.div`
//   overflow: hidden;
//   position: relative;
//   transform: translate3d(0, 100%, 0);
//   transition: transform 0.5s 0.1s;
//   color: transparent;
// `;
