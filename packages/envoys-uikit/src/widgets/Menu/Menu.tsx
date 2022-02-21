import React, { useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import { Box } from "../../components/Box";
import Flex from "../../components/Box/Flex";
import MenuItems from "../../components/MenuItems/MenuItems";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
import { MENU_HEIGHT, TOP_BANNER_HEIGHT, TOP_BANNER_HEIGHT_MOBILE } from "./config";
import { NavProps } from "./types";
import LangSelector from "../../components/LangSelector/LangSelector";
import { MenuContext } from "./context";
import { BurgerMenu, Button, IconButton } from "../..";


const PageTopBarContainer = styled.div`
  padding 30px 30px 0px 30px;
`
// Just a thumbnail for temporary usage.
const SearchBarThumbnail = styled.div`
  max-width: 962px;
  background: #FFFFFF;
  border: 1px solid #E8E8EA;
  box-sizing: border-box;
  border-radius: 14px;
  height: 60px;
`

const TopBarContainer = styled.div`
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
    margin: 0 25px 10px 25px;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
`;

const StyledNav = styled.nav<{isMobile: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transform: translate3d(0, 0, 0);
  padding-top: 50px;
  height: ${({ isMobile }) => isMobile ? 'calc(100% - 60px)' : '100%'};
`;

const InnerContainer = styled.div`
  width: 290px;
`;

const LogoSeparator = styled.nav`
  height: 48px;
`;

const FixedContainer = styled.div<{ isFixed: boolean;}>`
  position: ${({ isFixed }) => (isFixed ? "fixed" : "relative")};
  left: 0;
  transition: top 0.2s;
  z-index: 20;
  height: 100%;
  width: 24%;
  max-width: 448px;
  min-width: 290px;
`;

const BodyWrapper = styled(Box)`
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
  linkComponent = "a",
  globalMenu,
  isDark,
  toggleTheme,
  currentLang,
  setLang,
  links,
  activeItem,
  activeSubItem,
  langs,
  children,
}) => {

  const [showMenu, setShowMenu] = useState(false);
  const onPressSideMenu = () => {
    setShowMenu(!showMenu)
  }

  const theme = useTheme()
  const { isTablet, isMobile } = useMatchBreakpoints();

  const lowResolutionMode = isTablet || isMobile

  const topItems = links.filter(item => item.bottom !== true)
  const bottomItems = links.filter(item => item.bottom === true)

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <MenuContext.Provider value={{ linkComponent }}>
      {lowResolutionMode ? (
          <TopBarContainer>
            <div>
              <IconButton onClick={onPressSideMenu} variant="text" scale="sm">
                <BurgerMenu color={theme.colors.textSubtle} />
              </IconButton>
            </div>
            <Logo isDark={isDark} href={homeLink?.href ?? "/"} />
            <div />
          </TopBarContainer>
      ) : ('')}

      <Wrapper>
        {(lowResolutionMode && !showMenu) ? (
          ('')
        ) : (
        <FixedContainer isFixed>
          <StyledNav isMobile={lowResolutionMode}>
            <InnerContainer>
              <Flex flexDirection="column">
                {lowResolutionMode ? <></> : (
                  <>
                    <LogoContainer>
                      <Logo isDark={isDark} href={homeLink?.href ?? "/"} />
                    </LogoContainer>
                    <LogoSeparator />
                  </> 
                )}
                <MenuItems items={topItems} activeItem={activeItem} activeSubItem={activeSubItem}/>
              </Flex>
            </InnerContainer>
            <BottomMenuWrapper >
              <InnerContainer>
                <MenusContainer>
                {globalMenu}
                </MenusContainer>
                <MenuItems items={bottomItems} activeItem={activeItem} activeSubItem={activeSubItem}/>
              </InnerContainer>
            </BottomMenuWrapper>
          </StyledNav>
        </FixedContainer>
      )}
      { !lowResolutionMode ? <FixedContainer isFixed={false}/> : ('') }
        <BodyWrapper>
          <PageTopBarContainer>
            <SearchBarThumbnail/>
          </PageTopBarContainer>
          <Inner isPushed={false} showMenu={showMenu}>
            {children}
          </Inner>
        </BodyWrapper>
      </Wrapper>
    </MenuContext.Provider>
  );
};

export default Menu;
