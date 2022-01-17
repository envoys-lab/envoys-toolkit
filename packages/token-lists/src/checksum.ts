import fs from "fs";
import path from "path";
import { getAddress } from "@ethersproject/address";
import envoysDefault from "./tokens/envoys-default.json";
import envoysExtended from "./tokens/envoys-extended.json";
import envoysTop100 from "./tokens/envoys-top-100.json";
import envoysTop15 from "./tokens/envoys-top-15.json";

const lists = {
  "envoys-default": envoysDefault,
  "envoys-extended": envoysExtended,
  "envoys-top-100": envoysTop100,
  "envoys-top-15": envoysTop15
};

const checksumAddresses = (listName: string): void => {
  let badChecksumCount = 0;
  const listToChecksum = lists[listName];
  const updatedList = listToChecksum.reduce((tokenList, token) => {
    const checksummedAddress = getAddress(token.address);
    if (checksummedAddress !== token.address) {
      badChecksumCount += 1;
      const updatedToken = { ...token, address: checksummedAddress };
      return [...tokenList, updatedToken];
    }
    return [...tokenList, token];
  }, []);

  if (badChecksumCount > 0) {
    console.info(`Found and fixed ${badChecksumCount} non-checksummed addreses`);
    const tokenListPath = `${path.resolve()}/src/tokens/${listName}.json`;
    console.info("Saving updated list to ", tokenListPath);
    const stringifiedList = JSON.stringify(updatedList, null, 2);
    fs.writeFileSync(tokenListPath, stringifiedList);
    console.info("Checksumming done!");
  } else {
    console.info("All addresses are already checksummed");
  }
};

export default checksumAddresses;
