import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../Responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
  ${tw`
   flex
   list-none
`}
`;

const NavItem = styled.li<{ menu?: any }>`
  ${tw`
    text-sm
    md:text-base
    text-black
    font-medium
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-500
    focus:(text-gray-500)
  `};

  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:(text-gray-500)
    `};
    `};
`;

const navItems = ["Home", "Cars", "Services", "Contact Us"];
export function NavItems() {
  const isMoble = useMediaQuery({ maxWidth: SCREENS.sm });
  if (isMoble) {
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          {navItems.map((item) => (
            <NavItem key={item} menu>
              <a href="#">{item}</a>
            </NavItem>
          ))}
        </ListContainer>
      </Menu>
    );
  }
  return (
    <ListContainer>
      {navItems.map((item) => (
        <NavItem key={item}>
          <a href="#">{item}</a>
        </NavItem>
      ))}
    </ListContainer>
  );
}
