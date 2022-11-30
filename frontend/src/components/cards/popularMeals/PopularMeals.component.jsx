import {
  CardOuter,
  CardInner,
  CardImage,
  CardHeaderGrid,
  CardHeader,
  CardCartGrid,
  CardCardButtonGrid,
  CardCartButton,
  CardCart,
} from "./PopularMeals.styles";

function PopularMeals({ coffeeImage, coffeeName, coffeePrice }) {
  return (
    <CardOuter>
      <CardInner>
        <CardImage src={coffeeImage} />
        <CardHeaderGrid>
          <CardHeader left>{coffeeName}</CardHeader>
          <CardHeader>{coffeePrice}</CardHeader>
        </CardHeaderGrid>
        <CardCartGrid>
          <CardCardButtonGrid>
            <CardCartButton hot>Hot</CardCartButton>
            <CardCartButton>Cold</CardCartButton>
          </CardCardButtonGrid>
          <CardCart>
            <span className="material-symbols-outlined">shopping_cart</span>
          </CardCart>
        </CardCartGrid>
      </CardInner>
    </CardOuter>
  );
}

export default PopularMeals;
