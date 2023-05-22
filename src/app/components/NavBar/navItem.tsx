import { styled } from "styled-components";
import tw from "twin.macro";

const ListContainer = styled.ul`
  ${tw`
   flex
   list-none
`}
`;

const NavItem = styled.li`
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
    hover:text-gray-700
`}
`;
const navItems = ["Home", "Cars", "Services", "Contact Us"];
export function NavItems() {
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
