import React, { useState } from "react";
import styled from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import Grid from "../../components/Box/Grid";
import Box from "../../components/Box/Box";
import Heading from "../../components/Heading/Heading";
import { Button } from "../../components/Button";
import { ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalTitle } from "../Modal";
import WalletCard, { MoreWalletCard } from "./WalletCard";
import config, { walletLocalStorageKey } from "./config";
import { Config, Login } from "./types";

interface Props {
  login: Login;
  onDismiss?: () => void;
  displayCount?: number;
  t: (key: string) => string;
}

const WalletWrapper = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`;

const WalletCardBox = styled(Box)`
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radii.default};
`;

/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
const getPreferredConfig = (walletConfig: Config[]) => {
  const preferredWalletName = localStorage.getItem(walletLocalStorageKey);
  const sortedConfig = walletConfig.sort((a: Config, b: Config) => a.priority - b.priority);

  if (!preferredWalletName) {
    return sortedConfig;
  }

  const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName);

  if (!preferredWallet) {
    return sortedConfig;
  }

  return [
    preferredWallet,
    ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName),
  ];
};

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null, displayCount = 3, t }) => {
  const [showMore, setShowMore] = useState(false);
  const sortedConfig = getPreferredConfig(config);
  const displayListConfig = showMore ? sortedConfig : sortedConfig.slice(0, displayCount);

  return (
    <ModalContainer minWidth="320px">
      <ModalHeader>
        <ModalTitle>
          <Heading>{t("Connect Wallet")}</Heading>
        </ModalTitle>
        <ModalCloseButton onDismiss={onDismiss} />
      </ModalHeader>
      <ModalBody width={["320px", null, "340px"]}>
        <WalletWrapper m="24px" mb="0" pb="24px" maxHeight="453px" overflowY="auto">
          <Grid gridTemplateColumns="1fr 1fr" gridGap="24px">
            {displayListConfig.map((wallet) => (
              <WalletCardBox key={wallet.title}>
                <WalletCard walletConfig={wallet} login={login} onDismiss={onDismiss} />
              </WalletCardBox>
            ))}
            {sortedConfig.length === 0 && !showMore && <MoreWalletCard t={t} onClick={() => setShowMore(true)} />}
          </Grid>
        </WalletWrapper>
        <Button
          as="a"
          href="https://metamask.io/faqs/"
          variant="tertiary"
          width="100%"
          style={{ borderColor: "transparent"}}
          {...getExternalLinkProps()}
        >
          {t("How to Connect")}
        </Button>
      </ModalBody>
    </ModalContainer>
  );
};

export default ConnectModal;
