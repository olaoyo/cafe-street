import styled from "styled-components";

export const FooterStyles = styled.footer`
  grid-column: left-start 1 / right-end 12;

  display: grid;
  grid-template-columns: repeat(12, minmax(13rem, auto));
  background: ${({ theme }) => theme.colors.white.one};
`;

export const FooterCard = styled.figure`
  grid-column: 2 / span 10;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 2.5rem;

  width: 142rem;
  height: 39.2rem;
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  margin: 0 auto;
  background: #000000;
  z-index: 1;
`;

export const FooterImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -80%;
  opacity: 0.55;
`;

export const FooterHeader = styled.h2`
  color: ${({ theme }) => theme.colors.white.one};
  font-size: ${({ theme }) => theme.fontSizes.headers.h2};
  justify-self: center;
  align-self: end;
  z-index: 2;
`;

export const FooterForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, max-content);

  width: 486px;
  height: 54px;
  justify-self: center;
  z-index: 2;
`;

export const FooterInput = styled.input`
  width: 486px;
  height: 54px;
  background: ${({ theme }) => theme.colors.white.one};
  border-radius: 42px;
  border: none;
  padding: 2rem;

  :focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(35, 41, 55, 0.1);
  }

  :focus:invalid {
    border: ${({ theme }) => theme.colors.primary};
  }

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.light};
    font-size: ${({ theme }) => theme.fontSizes.paragraphs.p2};
    font-weight: 600;
  }
`;
