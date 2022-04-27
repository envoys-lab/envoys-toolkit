import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Box } from "../../components/Box";
import Flex from "../../components/Box/Flex";
import MenuItems from "../../components/MenuItems/MenuItems";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
// import { MENU_HEIGHT, TOP_BANNER_HEIGHT, TOP_BANNER_HEIGHT_MOBILE } from "./config";
import { NavProps } from "./types";
// import LangSelector from "../../components/LangSelector/LangSelector";
import { MenuContext } from "./context";
import { BurgerMenu } from "../../components/Svg";
import IconButton from "../../components/Button/IconButton";
import {Overlay} from "../../components/Overlay";

const TopBarContainer = styled.div`
  position: fixed;
  z-index: 1002;

  width: 100%;

  height: 60px;
  background: rgba(255, 255, 255, 1);
  backdrop-filter: blur(50px);
  filter: drop-shadow(0px 4px 10px rgba(200, 200, 200, 0.1));

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  align-items: center;

  padding-left: 16px;
  padding-right: 16px;
`;

const MenusContainer = styled.div`
  margin: 0 20px 10px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const StyledNav = styled.nav<{ isMobile: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transform: translate3d(0, 0, 0);
  padding-top: 50px;
  height: ${({ isMobile }) => (isMobile ? "calc(100% - 60px)" : "100%")};
`;

const InnerContainer = styled.div`
  width: 290px;
`;

const LogoSeparator = styled.nav`
  height: 48px;
`;

const Space = styled.nav`
  height: 60px;
`;

const FixedContainer = styled.div<{ isFixed: boolean }>`
  ${({ isFixed, theme }) => isFixed && (`border-right: 1px solid ${theme.colors.panelBorder}`)};

  position: ${({ isFixed }) => (isFixed ? "fixed" : "relative")};
  height: 100%;

  left: 0;
  transition: left 0.2s;
  z-index: 20;

  width: 24%;
  max-width: 448px;
  min-width: 290px;
`;

const Body = styled(Box)`
  display: block;
  flex-grow: 1;
`;

const BottomMenuWrapper = styled(Flex)`
  align-items: flex-end;
  flex-direction: column;
  padding-bottom: 30px;
`;

const LogoContainer = styled(Flex)`
  padding: 0 16px 0 25px;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
`;

const Menu: React.FC<NavProps> = ({
  searchBar,
  linkComponent = "a",
  globalMenu,
  isDark,
  links,
  activeItem,
  activeSubItem,
  children,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const onPressSideMenu = () => {
    setShowMenu(!showMenu);
  };

  const theme = useTheme();
  const { isTablet, isMobile } = useMatchBreakpoints();

  const lowResolutionMode = isTablet || isMobile;

  const topItems = links.filter((item) => item.bottom !== true);
  const bottomItems = links.filter((item) => item.bottom === true);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const onItemClick = () => {
    onPressSideMenu();
  };

  return (
    <MenuContext.Provider value={{ linkComponent }}>
      {lowResolutionMode ? (
        <>
          <TopBarContainer>
            <div>
              <IconButton onClick={onPressSideMenu} variant="text" scale="sm">
                <BurgerMenu color={theme.colors.textSubtle} />
              </IconButton>
            </div>
            <Logo isDark={isDark} href={homeLink?.href ?? "/"} />
            <div />
          </TopBarContainer>
          <Space />
          {showMenu && <Overlay onClick={onPressSideMenu}/>}
        </>
      ) : (
        ""
      )}

      <Wrapper>
        {lowResolutionMode && !showMenu ? (
          ""
        ) : (
          <FixedContainer isFixed>
            <StyledNav isMobile={lowResolutionMode}>
              <InnerContainer>
                <Flex flexDirection="column">
                  {lowResolutionMode ? (
                    <></>
                  ) : (
                    <>
                      <LogoContainer>
                        <Logo isDark={isDark} href={homeLink?.href ?? "/"} />
                      </LogoContainer>
                      <LogoSeparator />
                    </>
                  )}
                  <MenuItems
                    onItemClick={onItemClick}
                    items={topItems}
                    activeItem={activeItem}
                    activeSubItem={activeSubItem}
                  />
                </Flex>
              </InnerContainer>
              <BottomMenuWrapper>
                <InnerContainer>
                  <MenusContainer>{globalMenu}</MenusContainer>
                  <MenuItems
                    onItemClick={onItemClick}
                    items={bottomItems}
                    activeItem={activeItem}
                    activeSubItem={activeSubItem}
                  />
                </InnerContainer>
              </BottomMenuWrapper>
            </StyledNav>
          </FixedContainer>
        )}
        {!lowResolutionMode ? <FixedContainer isFixed={false} /> : ""}
        <Body>
          {searchBar}
          <Inner isPushed={false} showMenu={showMenu}>
            {children}
          </Inner>
        </Body>
      </Wrapper>
    </MenuContext.Provider>
  );
};

export default Menu;
