import styled from "styled-components";

export const PopularStyles = styled.div`
  grid-column: left-start / right-end;

  display: grid;
  grid-template-columns: repeat(12, minmax(13rem, auto));
  background: white;
`;

export const PopularTextAndCards = styled.div`
  grid-column: 2 / span 11;

  display: grid;
  grid-template-rows: repeat(2, max-content);
`;

export const PopularNow = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.headers.h1};
  color: ${({ theme }) => theme.colors.black.one};
  margin: -35rem 0 0 2rem;

  span {
  }

  span::after {
    content: "";
    display: block;
    width: 10.8rem;
    height: 0.4rem;
    background-color: ${({ theme }) => theme.colors.primary};
    margin: -1.5rem 0 0 20rem;
    border-radius: 50px;
  }
`;

export const PopularCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: ${({ theme }) => theme.colors.accents};
  width: 156rem;
  height: 36.7rem;
  border-radius: 64px;
  margin: -12rem 0 15rem -5.9rem;
  justify-items: center;
`;
