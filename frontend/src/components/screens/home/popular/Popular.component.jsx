import {
  PopularStyles,
  PopularTextAndCards,
  PopularNow,
  PopularCardGrid,
} from "./Popular.styles";
import PopularMeals from "../../../cards/popularMeals/PopularMeals.component";
import popularCoffeeOne from "./images/popularCoffeeOne.png";
import popularCoffeeTwo from "./images/popularCoffeeTwo.png";
import popularCoffeeThree from "./images/popularCoffeeThree.png";

function Popular() {
  return (
    <PopularStyles>
      <PopularTextAndCards>
        <PopularNow>
          Popular <span>Now</span>
        </PopularNow>
        <PopularCardGrid>
          <PopularMeals
            coffeeImage={popularCoffeeOne}
            coffeeName="Vanilla Latte"
            coffeePrice="21 K"
          />
          <PopularMeals
            coffeeImage={popularCoffeeTwo}
            coffeeName="Espresso"
            coffeePrice="12 K"
          />
          <PopularMeals
            coffeeImage={popularCoffeeThree}
            coffeeName="Hazelnut Latte"
            coffeePrice="23 K"
          />
        </PopularCardGrid>
      </PopularTextAndCards>
    </PopularStyles>
  );
}

export default Popular;
