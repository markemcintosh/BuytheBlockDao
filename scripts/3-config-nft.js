import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x07596Efb4Fe8Fc5c1E0eAb4D5502742696833927",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "BlockedChain Token",
        description: "This NFT will give you access to BuytheBlock Dao!",
        image: readFileSync("scripts/assets/blockedchain.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()