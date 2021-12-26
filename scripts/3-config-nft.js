import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x55b78C1264078Cf44784143785FF31205b83F434",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "CycHead NFT",
        description: "This NFT will give you access to CycHeadsDAO!",
        image: readFileSync("scripts/assets/cycheads.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()