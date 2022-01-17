import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as envoysDefaultVersion } from "../lists/envoys-default.json";
import { version as envoysExtendedVersion } from "../lists/envoys-extended.json";
import { version as envoysTop15Version } from "../lists/envoys-top-15.json";
import { version as envoysTop100Version } from "../lists/envoys-top-100.json";
import envoysDefault from "./tokens/envoys-default.json";
import envoysExtended from "./tokens/envoys-extended.json";
import envoysTop100 from "./tokens/envoys-top-100.json";
import envoysTop15 from "./tokens/envoys-top-15.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "envoys-default": {
    list: envoysDefault,
    name: "EnvoysSwap Default",
    keywords: ["envoys", "default"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: false,
    currentVersion: envoysDefaultVersion,
  },
  "envoys-extended": {
    list: envoysExtended,
    name: "EnvoysSwap Extended",
    keywords: ["envoys", "extended"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: envoysExtendedVersion,
  },
  "envoys-top-100": {
    list: envoysTop100,
    name: "EnvoysSwap Top 100",
    keywords: ["envoys", "top 100"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: envoysTop100Version,
  },
  "envoys-top-15": {
    list: envoysTop15,
    name: "EnvoysSwap Top 15",
    keywords: ["envoys", "top 15"],
    logoURI:
      "https://assets.trustwalletapp.com/blockchains/smartchain/assets/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82/logo.png",
    sort: true,
    currentVersion: envoysTop15Version,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
          if (t1.chainId === t2.chainId) {
            // CAKE first in extended list
            if ((t1.symbol === "CAKE") !== (t2.symbol === "CAKE")) {
              return t1.symbol === "CAKE" ? -1 : 1;
            }
            return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
          }
          return t1.chainId < t2.chainId ? -1 : 1;
        })
      : list,
  };
};

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};
