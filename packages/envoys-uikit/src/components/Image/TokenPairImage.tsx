import React from "react";
import styled from "styled-components";
import { TokenPairImageProps, variants } from "./types";
import { StyledPrimaryImage, StyledSecondaryImage } from "./styles";
import Wrapper from "./Wrapper";

const Image = styled.img`
  width: 22px;
  height: 22px;
  position: absolute;
`

const RightImage = styled(Image)`
  right: 0;
`

const TokenPairImage: React.FC<TokenPairImageProps> = ({
  primarySrc,
  secondarySrc,
  width,
  height,
  variant = variants.DEFAULT,
  primaryImageProps = {},
  secondaryImageProps = {},
  absolutePosition,
  ...props
}) => {

  const commonProps = {
    variant,
    height,
    width
  }

  const wrapperWidth = absolutePosition ? width : width * 1.8;
  return (
    <Wrapper position="relative" width={wrapperWidth} height={height} {...props}>
      {absolutePosition ? (
        <>
          <Image src={primarySrc}/>
          <RightImage src={secondarySrc}/>
        </>
      ) : (
        <>
          <StyledPrimaryImage src={primarySrc} {...commonProps} {...primaryImageProps} />
          <StyledSecondaryImage src={secondarySrc} {...commonProps} {...secondaryImageProps} />
        </>
      )}
    </Wrapper>
  );
};

export default TokenPairImage;
