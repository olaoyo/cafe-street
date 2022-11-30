import styled from "styled-components";

// Hero Text

export const HeroStyles = styled.div`
  grid-column: left-start / right-end;

  display: grid;
  grid-template-columns: repeat(12, minmax(13rem, auto));
  background: ${({ theme }) => theme.colors.tertiary};
  padding: 15.5rem 0 45rem 0;
`;

export const HeroText = styled.div`
  grid-column: 2 / span 4;

  display: grid;
  grid-template-rows: repeat(3, max-content);
  row-gap: 3rem;
  padding-left: 4rem;
`;

export const HeroHeader = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.headers.h1};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;

  padding-right: 10rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const HeroParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p1};
  color: ${({ theme }) => theme.colors.light};
  font-weight: 400;
  padding-right: 25rem;
`;

export const HeroOrder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 5rem;
`;

export const HeroOrderButton = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
`;

export const HeroCart = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 2.2rem;
  height: 2.2rem;
  margin-left: -5.5rem;
  align-self: center;

  span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white.one};
    justify-self: center;
    align-self: center;
  }

  :hover {
    cursor: pointer;
  }
`;

export const HeroOrderMenu = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.paragraphs.p4};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  align-self: center;
`;

// Hero Image

export const HeroImage = styled.div`
  grid-column: 8 / span 4;

  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  width: 41.6rem;
  height: 41.6rem;
  position: relative;
  margin-top: -8rem;
  z-index: 2;
`;

export const HeroCoffeeLogo = styled.img`
  position: absolute;
  top: 20%;
  left: 2%;
  z-index: 2;
`;

export const HeroCoffee = styled.img`
  position: absolute;
  top: 4%;
  left: 10%;
  z-index: 2;
`;

export const HeroCappuccinoOuter = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  background: ${({ theme }) => theme.colors.black.two};
  border-radius: 42px;
  position: absolute;
  width: 28.3rem;
  height: 6.9rem;
  top: 6%;
  left: -20%;
  z-index: 2;
`;

export const HeroCappuccinoInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.white.one};
  border-radius: 42px;
  width: 27.1rem;
  height: 5.7rem;
  justify-self: center;
  align-self: center;
  z-index: 2;

  p {
    font-size: ${({ theme }) => theme.fontSizes.headers.h3};
    justify-self: center;
    align-self: center;
    font-weight: 600;
  }
`;

export const Hero18KOuter = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  background: ${({ theme }) => theme.colors.black.two};
  border-radius: 42px;
  position: absolute;
  width: 15.5rem;
  height: 6.9rem;
  top: 77%;
  left: 2%;
  z-index: 2;
`;

export const Hero18KInner = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.white.one};
  border-radius: 42px;
  width: 14.1rem;
  height: 5.7rem;
  justify-self: center;
  align-self: center;
  z-index: 2;
  

  p {
    font-size: ${({ theme }) => theme.fontSizes.headers.h3};
    justify-self: center;
    align-self: center;
    font-weight: 600;
  }
`;

export const Hero4StarOuter = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  background: ${({ theme }) => theme.colors.black.two};
  border-radius: 42px;
  position: absolute;
  width: 15.071rem;
  height: 7.6rem;
  top: 20%;
  left: 72%;
  
  z-index: 2;
`;

export const Hero4StarInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;

  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.white.one};
  border-radius: 42px;

  width: 13.348rem;
  height: 5.812rem;
  justify-self: center;
  align-self: center;
  z-index: 2;

  p {
    font-size: ${({ theme }) => theme.fontSizes.headers.h3};
    justify-self: end;
    align-self: center;
    font-weight: 600;
    margin-right: -1rem;
  }

  span {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.yellow};
    justify-self: start;
    align-self: center;
    margin-left: 1rem;
  }
`;

export const HeroCoffeeBeans = styled.img`
  position: absolute;
  width: 59.9rem;
  height: 39.4rem;
  top: -42%;
  left: 10%;
  z-index: 1;
`;
