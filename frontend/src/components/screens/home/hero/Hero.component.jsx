import {
  HeroStyles,
  HeroText,
  HeroHeader,
  HeroParagraph,
  HeroOrder,
  HeroOrderButton,
  HeroCart,
  HeroOrderMenu,
  HeroImage,
  HeroCoffeeLogo,
  HeroCoffee,
  HeroCappuccinoOuter,
  HeroCappuccinoInner,
  Hero18KOuter,
  Hero18KInner,
  Hero4StarOuter,
  Hero4StarInner,
  HeroCoffeeBeans,
} from "./Hero.styles";
import { OrderNowHero } from "../../../buttons/Buttons";
import cafeStreetLogo from "./images/cafeStreetLogo.png";
import heroCoffee from "./images/heroCoffee.png";
import coffeeBeans from "./images/coffeeBeans.png";

function Hero() {
  return (
    <HeroStyles>
      <HeroText>
        <HeroHeader>
          Enjoy your <span>coffee</span> before your activity
        </HeroHeader>

        <HeroParagraph>
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </HeroParagraph>

        <HeroOrder>
          <HeroOrderButton>
            <OrderNowHero>
              <span>Order now</span>
            </OrderNowHero>
            <HeroCart>
              <span className="material-symbols-outlined">shopping_cart</span>
            </HeroCart>
          </HeroOrderButton>
          <HeroOrderMenu>More menu</HeroOrderMenu>
        </HeroOrder>
      </HeroText>

      <HeroImage>
        <HeroCoffeeLogo src={cafeStreetLogo} />
        <HeroCoffee src={heroCoffee} />
        <HeroCappuccinoOuter>
          <HeroCappuccinoInner>
            <p>Cappuccino</p>
          </HeroCappuccinoInner>
        </HeroCappuccinoOuter>

        <Hero18KOuter>
          <Hero18KInner>
            <p>18K</p>
          </Hero18KInner>
        </Hero18KOuter>

        <Hero4StarOuter>
          <Hero4StarInner>
            <p>4.8</p>
            <span className="material-symbols-outlined">stars</span>
          </Hero4StarInner>
        </Hero4StarOuter>

        <HeroCoffeeBeans src={coffeeBeans} />
      </HeroImage>
    </HeroStyles>
  );
}

export default Hero;
