import {
  FooterStyles,
  FooterCard,
  FooterImage,
  FooterHeader,
  FooterForm,
  FooterInput,
} from "./Footer.styles";
import { OrderNowButton } from "../buttons/Buttons";
import CoffeeImage from "../../images/footerImage.jpg";

function Footer() {
  return (
    <FooterStyles>
      <FooterCard>
        <FooterImage src={CoffeeImage} />
        <FooterHeader>Subscribe to get 50% discount price</FooterHeader>
        <FooterForm>
          <FooterInput type="email" placeholder="Email address" required />
          <OrderNowButton>Order now</OrderNowButton>
        </FooterForm>
      </FooterCard>
    </FooterStyles>
  );
}

export default Footer;
