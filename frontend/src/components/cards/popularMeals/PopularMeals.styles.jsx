import styled, { css } from "styled-components";

export const CardOuter = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.colors.black.two};
  width: 35.5rem;
  height: 38.5rem;
  border-radius: 12px;
  justify-items: center;
  align-items: center;
  margin-top: -10rem;
`;

export const CardInner = styled.article`
  display: grid;
  grid-template-rows: repeat(3, 1fr);

  background: ${({ theme }) => theme.colors.white.one};
  width: 34.3rem;
  height: 37.3rem;
  border-radius: 12px;
`;

export const CardImage = styled.img`
  width: 30.7rem;
  height: 22.6rem;
  justify-self: center;
  align-self: center;
  border-radius: 12px;
  margin-top: 2rem;
  /* overflow: hidden; */
`;

export const CardHeaderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 3.5rem;

  margin-top: 1.5rem;
  justify-self: center;
`;

export const CardHeader = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.headers.h3};

  ${({ left }) =>
    left
      ? css`
          width: 21.159rem;
          height: 3.6rem;
        `
      : css`
          width: 5rem;
          height: 3.6rem;
        `}
`;

export const CardCartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 9rem;
  justify-self: center;
  align-self: center;
  margin-top: -2rem;
`;

export const CardCardButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 3rem;
  margin-top: 0.6rem;
`;

export const CardCartButton = styled.button`
  background: ${({ theme }) => theme.colors.white.one};
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
  font-weight: 600;
  width: 6.4rem;
  height: 3.2rem;
  border: none;
  border-radius: 8px;

  ${({ hot }) =>
    hot
      ? css`
          color: ${({ theme }) => theme.colors.hot};
          border: 2px solid ${({ theme }) => theme.colors.hot};
        `
      : css`
          color: ${({ theme }) => theme.colors.cold};
          border: 2px solid ${({ theme }) => theme.colors.cold};
        `}
`;

export const CardCart = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 4.3rem;
  height: 4.3rem;

  span {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.white.one};
    justify-self: center;
    align-self: center;
  }

  :hover {
    cursor: pointer;
  }
`;


