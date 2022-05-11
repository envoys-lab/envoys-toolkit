import React, {MouseEvent, useEffect, useState} from "react";
import styled, {css, useTheme} from "styled-components";
import {Box} from "../../components/Box";
import Flex from "../../components/Box/Flex";
import MenuItems from "../../components/MenuItems/MenuItems";
import {useMatchBreakpoints} from "../../hooks";
import Logo from "./components/Logo";
// import { MENU_HEIGHT, TOP_BANNER_HEIGHT, TOP_BANNER_HEIGHT_MOBILE } from "./config";
import {NavProps} from "./types";
// import LangSelector from "../../components/LangSelector/LangSelector";
import {MenuContext} from "./context";
import {BurgerMenu} from "../../components/Svg";
import IconButton from "../../components/Button/IconButton";
import {Overlay} from "../../components/Overlay";
import {animationDuration} from "../../theme";
import {menuItemHeight, menuItemHighlightHeight} from "../../components/MenuItem/styles";

export const topBarHeight = 60;

const TopBarContainer = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndices.modal-2};

  width: 100%;

  height: ${topBarHeight}px;
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

const StyledNav = styled.nav<{ isMobile: boolean, isClosing: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  transform: translate3d(0, 0, 0);
  padding-top: 50px;
  height: ${({ isMobile }) => (isMobile ? `calc(100% - ${topBarHeight}px)` : "100%")};
  ${({isMobile, isClosing, theme}) => isMobile && !isClosing && css`
    animation: ${theme.animations.nav} ${theme.animations.duration} ease-in-out;
  `}
  ${({isMobile, isClosing, theme}) => isMobile && isClosing && css`
    transition: transform ${theme.animations.duration} ease-in-out;
    transform: translateX(-100%);
  `}
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

export const sideBarMinWidth = 290;
export const sideBarMaxWidth = 448;
export const sideBarWidthPercents = 24;

const FixedContainer = styled.div<{ isFixed: boolean }>`
  ${({ isFixed, theme }) => isFixed && (`border-right: 1px solid ${theme.colors.panelBorder}`)};

  position: ${({ isFixed }) => (isFixed ? "fixed" : "relative")};
  height: 100%;

  left: 0;
  transition: left 0.2s;
  z-index: 20;

  width: ${sideBarWidthPercents}%;
  max-width: ${sideBarMaxWidth}px;
  min-width: ${sideBarMinWidth}px;
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

const ActiveItemHighlight = styled.span`
  display: block;
  position: absolute;
  right: 0;
  width: 4px;
  height: ${menuItemHighlightHeight}px;
  border-radius: 2px;
  transition-property: top;
  transition-timing-function: ease-in-out;
  transition-duration: ${({ theme }) => theme.animations.duration};
  background: ${({ theme }) => theme.colors.basicOrange};
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
  const [openingMenu, setOpeningMenu] = useState(false);
  const [closingMenu, setClosingMenu] = useState(false);

  const onPressSideMenu = () => {
    if (showMenu) {
      setOpeningMenu(false);
      setClosingMenu(true);
      setTimeout(() => {
        setShowMenu(false);
      }, animationDuration)
    } else {
      setClosingMenu(false);
      setOpeningMenu(true);
      setShowMenu(true);
    }
  };

  const theme = useTheme();
  const { isTablet, isMobile } = useMatchBreakpoints();

  const lowResolutionMode = isTablet || isMobile;

  const topItems = links.filter((item) => item.bottom !== true);
  const bottomItems = links.filter((item) => item.bottom === true);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const getHighlightPos = (el: HTMLAnchorElement) => {
    return (el.parentElement?.offsetTop || 0) + (menuItemHeight - menuItemHighlightHeight) / 2
  }

  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)
  const [highlightTopPos, setHighlightTopPos] = useState<number | undefined>(undefined);

  const onItemClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = e.target as HTMLAnchorElement;
    if (el) {
      const newPos = getHighlightPos(el);
      setHighlightTopPos(newPos);
      setTimeout(() => {
        onPressSideMenu();
      }, animationDuration)
    }
  };

  useEffect(() => {
    const moveActiveTabMark = () => {
      if(wrapperElement) {
        const el = (wrapperElement as HTMLElement).querySelector(`a[href='${activeItem}']`);
        if (el) {
          const initPos = getHighlightPos(el as HTMLAnchorElement);
          setHighlightTopPos(initPos)
        }
      }
    }
    moveActiveTabMark();
    const observer: ResizeObserver = new ResizeObserver(moveActiveTabMark);
    observer.observe(window.document.body)
    return () => {
      observer.disconnect();
    }
  }, [links, wrapperElement, activeItem]);

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
            <StyledNav isMobile={lowResolutionMode} isClosing={showMenu && closingMenu && !openingMenu}  ref={setWrapperElement}>
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
              {highlightTopPos !== undefined && <ActiveItemHighlight style={{ top: highlightTopPos }} />}
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
