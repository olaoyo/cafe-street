import {
  HeaderStyles,
  Logo,
  Menu,
  MenuItem,
  Cart,
  Profile,
  ProfileOuter,
  ProfileInner,
} from "./Header.styles";
import Search from "../search/Search.component";
import { LoginButton } from "../buttons/Buttons";
import CafeStreetLogo from "../../images/cafeStreetLogo.svg";

function Header() {
  return (
    <HeaderStyles>
      <Logo src={CafeStreetLogo} />
      <Search />
      <Menu>
        <MenuItem>Products</MenuItem>
        <MenuItem>Admin</MenuItem>
        <MenuItem>Profile</MenuItem>
      </Menu>
      <Cart>
        <span className="material-symbols-outlined">shopping_cart</span>
      </Cart>
      
        <ProfileOuter>
          <ProfileInner>
            <p>OO</p>
          </ProfileInner>
        </ProfileOuter>
        <LoginButton>Login</LoginButton>
    
    </HeaderStyles>
  );
}

export default Header;
