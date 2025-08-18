import React from "react";
import styled from "@emotion/styled"

import CartDisplay from "./CartDisplay";

import MobileMenu from "./MobileMenu";
import WidthUtil from "./utils/WidthUtil";
import UnstyledButton from "./utils/UnstyledButton";
import { QUERIES } from "./utils/constants";

import Avatar from './images/image-avatar.png'
import Logo from './images/logo.svg'
import IconMenu from './images/icon-menu.svg'

export default function Header({ count, setItemCount }) {
  const [showMObileMenu, handleShowMobileMenu] = React.useState(false)
  const [isCartOpen, setIsCartOpen] = React.useState(false)

  return (
    <header>
      <WidthUtil>

        <MainHeader>

          <Menus>
            <MobileMenuOpener>
              <UnstyledButton onClick={() => handleShowMobileMenu(true)}>
                <img src={IconMenu} alt="" />
              </UnstyledButton>
            </MobileMenuOpener>
            <div>
              <img src={Logo} alt="" />
            </div>
          </Menus>

          <Navigator>
            <Links>
              <Link><a href="#">Collections</a></Link>
              <Link><a href="#">Men</a></Link>
              <Link><a href="#">Women</a></Link>
              <Link><a href="#">About</a></Link>
              <Link><a href="#">Contact</a></Link>
            </Links>
          </Navigator>

          <User>
            <CartDisplay 
              count={count}
              isOpen={isCartOpen}
              onOpenChange={setIsCartOpen}
              setItemCount={setItemCount}
            />
            <Profile>
              <img src={Avatar} alt="" />
            </Profile>
          </User>

        </MainHeader>

        <MobileMenu 
          isOpen={showMObileMenu}
          onDismiss={() => handleShowMobileMenu(false)}
        />

      </WidthUtil>
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-block: clamp(1.5rem, 6.667vw + -1rem, 2rem);
  border-bottom: 1px solid var(--grey-100);

  @media ${QUERIES.tabletAndLarger} {
    margin-block-end: clamp(3rem, 20vw + -8rem, 6rem);
  }

  @media ${QUERIES.laptopAndLarger} {
    padding-block: revert;
    justify-content: revert;
    gap: var(--spacing-0900);
  }
`;

const Menus = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-0200);
`;

const MobileMenuOpener = styled.div`
  @media ${QUERIES.laptopAndLarger} {
    display: none;
  }
`;

const Navigator = styled.nav`
  display: none;

  @media ${QUERIES.laptopAndLarger} {
    display: flex;
    align-items: center;
    margin-right: auto;
  }
`;

const Links = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  gap: var(--spacing-0400);

  a {
    text-decoration: none;
    color: var(--grey-500);
    font-size: var(--fs-15);
    letter-spacing: 0px;
    line-height: var(--lh-26);
  }
`;

const Link = styled.li`
  a {
    display: inline-block;
    padding-block: var(--spacing-0600);
    border-bottom: 4px solid transparent;

    &:hover {
      color: var(--grey-950);
      border-bottom: 4px solid var(--orange-500);
    }
  }
`;

const User = styled.div`
  display: flex;
  gap: clamp(1.5rem, 20vw + -6rem, 3rem);
  align-items: center;
`;

const Profile = styled.div`
  width: clamp(1.5rem, 21.667vw + -6.625rem, 3.125rem);

  &:hover {
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid var(--orange-500);
  }
`;