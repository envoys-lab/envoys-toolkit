import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Box } from "../../components/Box";
import Flex from "../../components/Box/Flex";
import MenuItems from "../../components/MenuItems/MenuItems";
import { useMatchBreakpoints } from "../../hooks";
import CakePrice from "../../components/CakePrice/CakePrice";
import Logo from "./components/Logo";
import { MENU_HEIGHT, TOP_BANNER_HEIGHT, TOP_BANNER_HEIGHT_MOBILE } from "./config";
import { NavProps } from "./types";
import LangSelector from "../../components/LangSelector/LangSelector";
import { MenuContext } from "./context";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transform: translate3d(0, 0, 0);
  padding: 16px;
  height: 100%;
`;

const FixedContainer = styled.div<{ showMenu: boolean;}>`
  position: fixed;
  left: 0;
  transition: top 0.2s;
  z-index: 20;
  height: 100%;
  width: 20%;
`;

const BodyWrapper = styled(Box)`
  position: relative;
  display: flex;
  width: 80%;
`;

const BottomMenuWrapper = styled(Flex)`
  align-items: flex-end;
  flex-direction: column;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
`;

const Menu: React.FC<NavProps> = ({
  linkComponent = "a",
  userMenu,
  banner,
  globalMenu,
  isDark,
  toggleTheme,
  currentLang,
  setLang,
  cakePriceUsd,
  links,
  subLinks,
  footerLinks,
  activeItem,
  activeSubItem,
  langs,
  buyCakeLabel,
  children,
}) => {
  const { isMobile } = useMatchBreakpoints();
  const [showMenu, setShowMenu] = useState(true);

  const topBannerHeight = isMobile ? TOP_BANNER_HEIGHT_MOBILE : TOP_BANNER_HEIGHT;

  const totalTopMenuHeight = banner ? MENU_HEIGHT + topBannerHeight : MENU_HEIGHT;

  useEffect(() => {

  }, [totalTopMenuHeight]);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <MenuContext.Provider value={{ linkComponent }}>
      <Wrapper>
        <FixedContainer showMenu={showMenu}>
          <StyledNav>
            <Flex flexDirection="column">
              <Logo isDark={isDark} href={homeLink?.href ?? "/"} />
              {!isMobile && <MenuItems items={links} activeItem={activeItem} activeSubItem={activeSubItem}/>}
            </Flex>
            <BottomMenuWrapper >
              {!isMobile && (
                <Box mr="12px">
                  <CakePrice cakePriceUsd={cakePriceUsd} />
                </Box>
              )}
              <Box mt="4px">
                <LangSelector
                  currentLang={currentLang}
                  langs={langs}
                  setLang={setLang}
                  buttonScale="xs"
                  color="textSubtle"
                  hideLanguage
                />
              </Box>
              {globalMenu} {userMenu}
            </BottomMenuWrapper>
          </StyledNav>
        </FixedContainer>
        <BodyWrapper >
          <Inner isPushed={false} showMenu={showMenu}>
            {children}
          </Inner>
        </BodyWrapper>
      </Wrapper>
    </MenuContext.Provider>
  );
};

export default Menu;
